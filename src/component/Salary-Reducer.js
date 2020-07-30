import React, { useReducer } from 'react'
import EmployeeReducer from '../context/EmployeeReducer'

function SalaryReducer() {

    let [state, dispatch] = useReducer(EmployeeReducer, 10000)

    return (
        <div>
            <h1>Salary Reducer</h1>
            <h3>Salary: {state}</h3>
            <button onClick={() => dispatch('INCREMENT')}>Double Salary with Reducer</button>
            <button onClick={() => dispatch('DECREMENT')}>Back Salary with Reducer</button>
        </div>
    )
}

export default SalaryReducer