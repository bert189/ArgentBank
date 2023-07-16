import React from 'react'
import GreenButton from './GreenButton'

function Account({account}) {
    return (
        <div className='account'>
            <h3 className='account__title'>{account.title}</h3>
            <p className='account__amount'>${account.amount}</p>
            <p className='account__description'>{account.description}</p>
            <GreenButton text="View transactions" />
        </div>
    )
}

export default Account
