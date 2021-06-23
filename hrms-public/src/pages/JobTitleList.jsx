import React from 'react'
import { useState,useEffect } from 'react';
import JobTitleService from "../services/jobTitleService";

export default function EmployerList() {

    const [jobTitles, setJobTitles] = useState([]);

    useEffect(()=> {
        let jobTitleService = new JobTitleService()
        jobTitleService.getAllJobTitle().then(result => setJobTitles(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
