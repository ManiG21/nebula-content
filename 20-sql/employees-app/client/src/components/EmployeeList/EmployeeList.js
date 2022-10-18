import React, { useEffect, useState} from 'react'
import { getAllFromTable } from '../networkRequests'

export default function EmployeeList(){
    const [employees, setEmployees] = useState([])
  
  useEffect(() => {
     getAllFromTable('employee')
     .then(res => setEmployees(res))
  },[])
  console.log(employees)
    return (
        <div>Employee List</div>
    )
}