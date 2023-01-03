import React, { useEffect, useState} from 'react'
import { getAllFromTable } from '../networkRequests'
import "./EmployeeList.css"

export default function EmployeeList(){
    const [employees, setEmployees] = useState([])
  
  useEffect(() => {
     getAllFromTable('employee')
     .then(res => setEmployees(res))
  },[])

  function deleteEmployee(employee){
   fetch(`http://localhost:3030/employee/${employee.id}`, {method:'DELETE'})
  }
  console.log(employees)
    return (
        <>
        <h1>Employee List</h1>
        <div className= "EmployeeListContainer">
        {employees?.map((employee) => (
            <div class = 'employee'>
                {employee.employee_name}
                <br></br>
                {employee.id}
                <br></br>
                {employee.cityId}
                <br></br>
                <button onClick={()=>deleteEmployee(employee)}>🗑️</button>
            </div>
        ))}
        </div>
        </>
    )
}
