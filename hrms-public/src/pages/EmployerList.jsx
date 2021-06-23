import React from 'react'
import { useState,useEffect } from 'react';
import EmployerService from "../services/employerService";

export default function EmployerList() {

    const [employers, setEmployers] = useState([]);

    useEffect(()=> {
        let employerService = new EmployerService()
        employerService.getAllEmployer().then(result => setEmployers(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
