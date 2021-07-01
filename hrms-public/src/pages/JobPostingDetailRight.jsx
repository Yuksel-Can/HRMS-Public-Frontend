import React from 'react'
import build from '../assets/images/build.jpg';
import { FaHeart, } from "react-icons/fa";
export default function JobPostingDetail() {
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <img src={build} alt="project-image" class="rounded img-detail" />


                    </div>
                    <div class="col-md-5">
                        <div class="project-info-box">
                            <p><b>Firma:</b> Kodlama.İO</p>
                            <p><b>Sektör:</b> Yazılım</p>
                            <p><b>Şehirler:</b> Ankara</p>
                            <p><b>Web Adresi:</b> www.kodlama.io</p>
                            <p><b>Çalışan Sayısı:</b> 562</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-3">
                        <div class="project-info-box mt-0">
                            <h3>PROJECT DETAILS</h3> 
                            <h5>GENEL NİTELİKLER VE İŞ TANIMI</h5>
                            <p class="mb-0">
                                Şirket Hakkında: Airtuerk Service GmbH, Almanya da Türkiye pazarı için faaliyet gösteren seyahat acentelerinin, alanında lider iş ortağıdır. Acentelerimize bireysel danışmanlık hizmetimizin yansıra Türkçe ve Almanca dillerinde uzman kadromuz ve sürekli yenilenen teknolojinin takipçisi olarak hizmet vermekteyiz. Hedefimiz, piyasa içerisinde oluşan her yenilik ve değişimde acentelerimize uygun ve akıllıca çözümler sunabilmektir. Almanya’da Türkiye pazarına hitap eden ilk hizmet sağlayıcı olarak liderlik konumumuzu başarı ile korumakta ve bu konuda sürekli geliştirmekteyiz. Airtuerk Service GmbH bugün Avrupa çapında 1.100 seyahat acentesine başta Uçak bileti olmak üzere konaklama ve araç kiralama hizmetlerinde en iyi fiyat garantisi sunmaktadır.

                                Merkezi Almanya olan şirketimizin Antalya‘da faaliyet gösteren şubesi için ekip arkadaşları aramaktayız

                                Aranan pozisyon: Biletleme uzmanı

                                Görevleriniz:

                                Rezervasyon, biletleme, değişiklik ve iptal işlemlerinin gerçekleştirilmesi ve takibi
                                B2B alanında destek ve danışmanlık hizmeti
                                B2B partnerlerimize telefon ve yazılı hizmet
                                E-posta ile gelen taleplerin işleme alınması
                                Şikâyet sürecinin takibi ve yönetimi
                                Sizden ne bekliyoruz?
                                <br /><hr /><h5>Aday Kriterleri ve Görevleri</h5>
                                En az lise mezunu (tercihen turizm lisans mezunu)
                                Türkçe ve Almanca tam yeterlilik
                                Erkek adaylar için askerliğini tamamlamış
                                Turizm sektöründe minimum 3 yıllık iş tecrübesi olan ve tercihen uçak bilet satışı, biletleme, bilet iptali ve rezervasyon değişikliği konularına hakim
                                Tercihen GDS (Amadeus, Galileo Sabre vs), Pegasus ve SunExpress rezervasyon sistemlerine hakim
                                Ekip çalışmasına yatkın
                                Müşteri ve hizmet odaklı
                                Problem çözme yeteneği olan
                                İletişim becerileri yüksek
                                Yoğun iş temposu ve esnek çalışma saatlerine uyum sağlayabilen
                                Ek bilgiler:

                                Uygun bulunan adaylar 5 haftalık bir eğitim ve toplamda 8 haftalık deneme süresinden sonra kadroya dahil olacaktır.
                                Maaşlar Euro bazlıdır</p>

                            <p><b>Client:</b> CUPCAKE CO</p>
                            <p><b>Date:</b> 14.02.2020</p>
                            <p><b>Designer:</b> James Doe</p>
                            <p><b>Tools:</b> Illustrator</p>
                            <p class="mb-0"><b>Budget:</b> $500</p>
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
