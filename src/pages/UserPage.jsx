import React from 'react'
import Account from '../components/Account'
import UserNameEditor from '../components/UserNameEditor'
import { useSelector } from 'react-redux';
import SignInForm from '../components/SignInForm';


function UserPage() {

    const signedIn = useSelector((state) => state.connexion.signedIn)

    // mock data pour les comptes bancaires
    const accounts = [
        {
            title : "Argent Bank Checking (x8349)",
            amount : "2,082.79",
            description : "Available Balance"
        },
        {
            title : "Argent Bank Savings (x6712)",
            amount : "10,928.42",
            description : "Available Balance"
        },
        {
            title : "Argent Bank Credit Card (x8349)",
            amount : "184.30",
            description : "Current Balance"
        }
    ];


    return (
        <main className='user-page'>
            { !signedIn ?
                <SignInForm />
                :
                <div>
                    <UserNameEditor />
                    <section className='accounts'>
                        {accounts && accounts.map((account, index) =>
                            <Account key={index} account={account} />
                        )}
                    </section>
                </div>

            }

        </main>
    )
}

export default UserPage
