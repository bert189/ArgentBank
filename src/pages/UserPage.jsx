import React from 'react'
import GreenButton from '../components/GreenButton'
import Account from '../components/Account'

function UserPage() {

    const user = {
        firstName : "Tony",
        lastName : "Jarvis"
    }
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
    ]

    return (
        <main className='user-page'>
            <section className='welcome'>
                <h1>
                    Welcome back
                    <span>{user.firstName}&nbsp;{user.lastName}&nbsp;!</span>
                </h1>
                <GreenButton text="Edit Name"/>
            </section>
      
            <section className='accounts'>
                {accounts && accounts.map((account, index) =>
                    <Account key={index} account={account} />
                )}
            </section>
        </main>
    )
}

export default UserPage
