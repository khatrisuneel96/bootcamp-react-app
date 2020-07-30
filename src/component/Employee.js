import React from 'react'
import EmployeeContext from '../context/EmployeeContext'
import SalaryReducer from './Salary-Reducer'
import Department from './Department'

const Employee = () => {

    let salary = React.useState(10000)

    return(
        <EmployeeContext.Provider value={salary}>
            <div>
                <h1>Employee Component</h1>
                <Department />
                <hr />
                <SalaryReducer />
            </div>
        </EmployeeContext.Provider>
    )
}

export default Employee