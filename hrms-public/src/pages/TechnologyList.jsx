import React from 'react'
import { useState,useEffect } from 'react';
import TechnologyService from "../services/technologyService";

export default function TechnologyList() {

    const [technologies, setTechnologies] = useState([])

    useEffect(()=>{
        let technologyService = new TechnologyService();
        technologyService.getAllTechnology().then(result=> setTechnologies(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
