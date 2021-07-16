import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobPostingService from '../../services/jobPostingService';

export default function JobPostingDetailLeft() {


    let { id } = useParams();

    const [jobPosting, setJobPosting] = useState({});

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.findByIsVisibleAndId(id).then(result => setJobPosting(result.data.data))
    }, [])

    String.prototype.toCamelCase = function () {
        return this.replace(/\b(\w)/g, function (match, capture) {
            return capture.toUpperCase();
        }).replace(/\s+/g, '');
    }
    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    return (
        <div>
            <div class="project-info-box-left">

               

                <p><b>İlan Numarası:</b> <br />{"0" + jobPosting.id}{"0" + jobPosting.id} </p>
                <p><b>İlan Pozisyonu:</b><br />{jobPosting.jobTitle?.title}</p>
                <p><b>Çalışma Zamanı:</b><br />{jobPosting.workingTime?.name}</p>
                <p><b>Çalışma Biçimi:</b><br /> {jobPosting.wayOfWorking?.name}</p>
                <p><b>İlan Başlama Tarihi:  </b><br /> {jobPosting.startedDate}</p>
                <p><b>İlan Bitiş Tarihi:     </b><br /> {jobPosting.endedDate}</p>
                <p><b>İstihdam:</b><br /> {jobPosting.openPosition}</p>
                <p><b>Maaş:</b><br />{"$" + jobPosting.minSalary + " - $" + jobPosting.maxSalary}</p>
                <p><b>Başvuru Sayısı:</b><br /> 1269*</p>
                <hr />
                <button type="button" class="btn btn-info mt-3 w-100">Profiline Git</button>
                <button type="button" class="btn btn-primary mt-1 w-100">Web Sitesi</button>
                <button type="button" class="btn btn-danger mt-1 w-100">Favorilere Ekle</button>
                <hr />
                <button type="button" class="btn btn-success mt-1 w-100">BAŞVUR</button>

            </div>
        </div>
    )
}