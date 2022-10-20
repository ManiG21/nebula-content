import React, { useEffect, useState} from 'react'
import { getAllFromTable } from '../networkRequests'
import "./EmployeeList.css"

export default function EmployeeList(){
    const [employees, setEmployees] = useState([])
  
  useEffect(() => {
     getAllFromTable('employee')
     .then(res => setEmployees(res))
  },[])
  console.log(employees)
    return (
        <>
        <div>Employee List</div>
        <div className= "EmployeeListContainer">
        {employees?.map((employee) => (
            <div class = 'employee'>
                {employee.employee_name}
                <br></br>
                {employee.id}
                <br></br>
                {/* {City.id} */}
                </div>
        ))}
        </div>
        </>
    )
}
