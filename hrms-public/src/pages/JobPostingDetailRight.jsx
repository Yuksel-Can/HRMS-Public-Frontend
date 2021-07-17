import React from 'react'
import build from '../assets/images/build.jpg';
import { FaHeart, } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import JobPostingService from '../services/jobPostingService';

import 'semantic-ui-css/semantic.min.css'
export default function JobPostingDetail() {

    let { id } = useParams();

    const [jobPosting, setJobPosting] = useState({});

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.findByIsVisibleAndId(id).then(result => setJobPosting(result.data.data))
    }, [])


    return (

        <div>

            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <img src={build} alt="project-image" class="rounded img-detail" />


                    </div>
                    <div class="col-md-5">
                        <div class="project-info-box">
                            <p><b>Firma:</b> {jobPosting.employer?.companyName}</p>
                            <p><b>Sektör:</b> Yazılım*</p>
                            <p><b>Şehirler:</b> {jobPosting.city?.cityName}</p>
                            <p><b>Web Adresi:</b> {jobPosting.employer?.webAddress}</p>
                            <p><b>Çalışan Sayısı:</b> 562*</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-3">
                        <div class="project-info-box mt-0">
                            <h3>{jobPosting.description}</h3>
                            <h5>GENEL NİTELİKLER VE İŞ TANIMI</h5>
                            <p class="mb-0">


                                Aranan pozisyon: Biletleme uzmanı

                                Görevleriniz:

                                Rezervasyon, biletleme, değişiklik ve iptal işlemlerinin gerçekleştirilmesi ve takibi
                                B2B alanında destek ve danışmanlık hizmeti<br/>
                                E-posta ile gelen taleplerin işleme alınması<br/>
                                Şikâyet sürecinin takibi ve yönetimi<br/>
                                Sizden ne bekliyoruz?
                                <br /><hr /><h5>Aday Kriterleri ve Görevleri</h5>
                                En az lise mezunu (tercihen turizm lisans mezunu)
                                Türkçe ve Almanca tam yeterlilik<br/>
                                Tercihen GDS (Amadeus, Galileo Sabre vs), Pegasus ve SunExpress rezervasyon sistemlerine hakim
                                Ekip çalışmasına yatkın<br/>
                                Müşteri ve hizmet odaklı<br/>
                                Problem çözme yeteneği olan<br/>
                                İletişim becerileri yüksek<br/>
                                Yoğun iş temposu ve esnek çalışma saatlerine uyum sağlayabilen
                                Ek bilgiler:<br/>

                                Uygun bulunan adaylar 5 haftalık bir eğitim ve toplamda 8 haftalık deneme süresinden sonra kadroya dahil olacaktır.
                                Maaşlar Euro bazlıdır</p>

                            <p><b>Departman: </b>{jobPosting.jobTitle?.title}</p>
                            <p><b>Son başvuru: </b>{jobPosting.endedDate}</p>
                            <p><b>Mezuniyet ve Bölüm: </b>Lisans ve Üstü* / Bilgisayar Mühendisliği*</p>
                            <p class="mb-0"><b>Adres: </b> Yücetepe, Akdeniz Cd. No:31, 06570 Çankaya/Ankara*</p>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-10 mt-3">
                                        <button class="btn btn-success p-3 mt-3 w-100 fs-20 fw-700 ls-3">BAŞVUR</button>
                                    </div>
                                    <div class="col-md-2 mt-3">
                                        <button class="btn btn-danger p-3 mt-3 w-100"><FaHeart size="1.5em"></FaHeart></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
