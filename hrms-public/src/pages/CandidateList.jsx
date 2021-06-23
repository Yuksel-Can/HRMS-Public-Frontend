import React from 'react';
import { useState,useEffect } from 'react';
import CandidateService from "../services/candidateService";

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(()=>{
        let candidateService = new CandidateService();
        candidateService.getAllCandidate().then(result=> setCandidates(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
