import React from 'react'
import { useState,useEffect } from 'react';
import ResumeService from "../services/resumeService";

export default function EmployerList() {

    const [resumes, setResumes] = useState([]);

    useEffect(()=> {
        let resumeService = new ResumeService()
        resumeService.getAllResume().then(result => setResumes(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
