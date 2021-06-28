import React from 'react'
import { useState,useEffect } from 'react';
import EducationService from "../services/educationService";

export default function EducationList() {

    const [educations, setEducations] = useState([])

    useEffect(()=>{
        let educationService = new EducationService();
        educationService.getAllEducation().then(result=> setEducations(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
