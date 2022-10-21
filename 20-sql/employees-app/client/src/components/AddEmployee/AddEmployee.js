import React, { useEffect, useState} from "react";
import { getAllFromTable } from '../networkRequests';

export default function AddEmployee() {
    const [employeeName, setEmployeeName] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [employeeCityId, setEmployeeCityId] = useState('')
    const [dateHired, setDateHired] = useState('')

    const updateEmployeeName = (e) => {
        setEmployeeName(e.target.value)
    }
    const updateEmployeeNumber = (e) => {
        setEmployeeNumber(e.target.value)
    }
    const updateEmployeeCityId = (e) => {
        setEmployeeCityId(e.target.value)
    }
    const updateDateHired = (e) => {
        setDateHired(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
    console.log(employeeName)
    console.log(employeeNumber)
    console.log(dateHired)
    console.log(employeeCityId)
    // console.log(employeeCityId, dateHired, employeeNumber, employeeName)  This is the shorter version of lines above
    }
    return (
        <form>
            <label>Employee name</label>
            <input value={employeeName} onChange = {updateEmployeeName}></input>
            <label>Employee number</label>
            <input value={employeeNumber} onChange = {updateEmployeeNumber}></input>
            <label>Date Hired</label>
            <input value={dateHired} onChange = {updateDateHired}></input>
            <label>Employee number</label>
            <input value={employeeCityId} onChange = {updateEmployeeCityId}></input>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}