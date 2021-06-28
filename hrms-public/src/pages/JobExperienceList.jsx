import React from 'react'
import { useState,useEffect } from 'react';
import JobExperienceService from "../services/jobExperienceService";

export default function JobExperienceList() {

    const [jobExperiences, setJobExperiences] = useState([])

    useEffect(()=>{
        let jobExperienceService = new JobExperienceService();
        jobExperienceService.getAllJobExperience().then(result=> setJobExperiences(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
