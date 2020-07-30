import React, { useContext, useState } from 'react'
import '../App.css'
import { TransactionContext } from './transContext'

function Main() {

    let { transactions, addTransaction } = useContext(TransactionContext)
    let [newDesc, setDesc] = useState('')
    let [newAmount, setAmount] = useState()

    const handleAddition = (evt) => {
        evt.preventDefault()
        if(Number(newAmount) === 0) {
            return alert('Enter correct amount!')
        }
        addTransaction({
            desc: newDesc,
            amount: Number(newAmount)
        })

        setDesc('')
        setAmount('')

    }

    const getIncome = () => {
        let income = 0
        for(var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income
    }

    const getExpense = () => {
        let expense = 0
        for(var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense
    }

    return (
        <div className="container">
            <h1 className="heading">Expanse Tracker</h1>

            <h3>Your Balance: <br /> ${getIncome() + getExpense()}</h3>

            <div className="exp-container">
                <h3>INCOME <br /> ${getIncome()} </h3>
                <h3>EXPENSE <br /> ${getExpense()} </h3>
            </div>

            <h3>History</h3>
            <hr />
        
            <ul className="trans-list">
                {transactions.map((transaction, index) => {
                    return (
                        <li key={index}>
                            <span>{transaction.desc}</span>
                            <span>${transaction.amount}</span>
                        </li>
                    )
                    
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <div className="trans-form">
                <form onSubmit={handleAddition}>
                    <label>
                        Enter Description <br />
                        <input type="text"
                            value={newDesc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Enter Description"
                            required />
                    </label>
                    <br />
                    <label>
                        Enter Amount <br />
                        <input type="number"
                            value={newAmount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter Amount"
                            required />
                    </label>
                    <br />
                    <input type="submit" value="Add Transaction" />
                </form>
            </div>
        </div>
    )
}

export default Main