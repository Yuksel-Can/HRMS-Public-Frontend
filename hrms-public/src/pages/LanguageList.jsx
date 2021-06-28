import React from 'react'
import { useState,useEffect } from 'react';
import LanguageService from "../services/languageService";

export default function LanguageList() {

    const [languages, setLanguages] = useState([])

    useEffect(()=>{
        let languageService = new LanguageService();
        languageService.getAllLanguage().then(result=> setLanguages(result.data.data))
    })

    return (
        <div>
            
        </div>
    )
}
