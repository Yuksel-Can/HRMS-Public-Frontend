import React from 'react'
import { useState,useEffect } from 'react';
import EducationLevelService from "../services/educationLevelService";

export default function EducationLevelList() {

    const [educationLevels, setEducationLevels] = useState([])

    useEffect(()=>{
        let educationLevelService = new EducationLevelService();
        educationLevelService.getAllEducationLevel().then(result=> setEducationLevels(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
