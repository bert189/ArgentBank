import React, { useState } from 'react'
import Account from '../components/Account'
import UserNameEditor from '../components/UserNameEditor'
// import { useParams } from 'react-router-dom';


function UserPage() {

    // const currentLocation = useParams();
    // const userId = currentLocation.id;

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
            <UserNameEditor />
            <section className='accounts'>
                {accounts && accounts.map((account, index) =>
                    <Account key={index} account={account} />
                )}
            </section>
        </main>
    )
}

export default UserPage
