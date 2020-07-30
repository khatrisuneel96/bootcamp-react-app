import React from 'react'
import EmployeeContext from '../context/EmployeeContext'

const Salary = () => {
    let context = React.useContext(EmployeeContext)
    return(
        <div>
            <h1>Salary Component</h1>
            <p>Salary: {context[0]}</p>
            <button onClick={() => {context[1](context[0]*2)}}>Double Salary</button>
            <button onClick={() => {context[1](context[0]/2)}}>Back Salary</button>
        </div>
    )
}

export default Salary