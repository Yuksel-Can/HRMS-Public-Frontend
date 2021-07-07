import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import EmployerService from '../../services/employerService';
import build from '../../assets/images/build.jpg';
import { Formik } from 'formik';
import * as Yup from "yup";

export default function EmployerProfile() {


    let { id } = useParams();

    const [employer, setEmployer] = useState({});

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.findBy(id).then(result => setEmployer(result.data.data))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)   //sayfanın tepesine çıkmamıza yarar
    }, [])


    return (
        <div>

            <div class="mt-120">


                <div class="container bootstrap snippets bootdey">
                    <div class="row ng-scope">
                        <div class="col-md-4">
                            <div class="panel panel-default">
                                <div class="panel-body-left1 text-center">
                                    <div class="pv-lg"><img class="center-block img-responsive img-circle img-thumbnail thumb96" src={build} alt="Contact" /></div>
                                    {/*https://www.bootdey.com/img/Content/avatar/avatar6.png */}
                                    <h3 class="m0 text-bold">Kodlama.İO</h3>
                                    <div class="mv-lg">
                                        <p> Ankara'da bir yazılım şirketi </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default hidden-xs hidden-sm pb-left">
                                <div class="panel-heading">
                                    <div class="panel-title text-center mb-3">Açık İlanlar</div>
                                </div>
                                <div class="panel-body-left2">
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="/#"><img class="media-object img-circle img-thumbnail thumb48" src={build} alt="Contact" /></a>
                                        </div>
                                        <div class="media-body pt-sm mt-1">
                                            <div class="text-bold">Java Geliştirici Aranıyor*
                                                <div class="text-sm text-muted">3 gün kaldı*</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="/#"><img class="media-object img-circle img-thumbnail thumb48" src={build} alt="Contact" /></a>
                                        </div>
                                        <div class="media-body pt-sm mt-1">
                                            <div class="text-bold">C# Geliştirici Aranıyor
                                                <div class="text-sm text-muted">12 gün kaldı</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="/#"><img class="media-object img-circle img-thumbnail thumb48" src={build} alt="Contact" /></a>
                                        </div>
                                        <div class="media-body pt-sm mt-1">
                                            <div class="text-bold">Ruby Geliştirici Aranıyor
                                                <div class="text-sm text-muted">18 gün kaldı</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="/#"><img class="media-object img-circle img-thumbnail thumb48" src={build} alt="Contact" /></a>
                                        </div>
                                        <div class="media-body pt-sm mt-1">
                                            <div class="text-bold">Flutter Geliştirici Aranıyor
                                                <div class="text-sm text-muted">24 gün kaldı</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-1"><a class="btn btn-warning" href="">Tümünü Görüntüle</a></div>

                                </div>
                            </div>
                        </div>






                        <div class="col-md-8">
                            <div class="panel panel-default">
                                <div class="panel-body-right">

                                    <div class="h4 text-center fb mb-4">Firma Bilgileri</div>
                                    <div class="row pv-lg">
                                        <div class="container">
                                            <Formik
                                                initialValues={{
                                                    companyName: '',
                                                    activityArea: '',       //faaliyet alanı
                                                    webAddress: '',
                                                    countOfWorker: '',      //çalışan sayısı
                                                    address: '',
                                                    summary: '',            //özet bilgi
                                                    email: '',
                                                    password: '',
                                                    confirmPassword: '',
                                                    agree: false,
                                                }}
                                                validationSchema={Yup.object({
                                                    companyName: Yup.string().min(3, 'Minimum 3 karakter olabilir').required('Firma Adı boş bırakılamaz'),
                                                    activityArea: Yup.string().min(3, 'Minimum 3 karakter olabilir').required('Firma Adı boş bırakılamaz'),
                                                    webAddress: Yup.string().required('Web Adresi boş bırakılamaz'),
                                                    countOfWorker: Yup.string().matches(/^[0-9]+$/, "Sadece rakam olmalıdır."),
                                                    address: Yup.string().required('Adres boş bırakılamaz'),
                                                    summary: Yup.string(),
                                                    email: Yup.string().email("Geçerli bir mail giriniz").required('Email boş bırakılamaz'),
                                                    password: Yup.string().required('Şifre boş bırakılamaz')
                                                        .matches(
                                                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                                                            "Minimum 6 karakter ve en az 1 büyük, 1 küçük, 1 sayı ve 1 özel karakter içermelidir."),
                                                    confirmPassword: Yup.string().required('Şifre boş bırakılamaz').oneOf([Yup.ref("password"), null], "Şiflere Eşleşmelidir !"),
                                                    agree: Yup.bool().oneOf([true], 'Koşulları kabul etmelisiniz'),

                                                })}
                                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                                    console.log(values);
                                                    setSubmitting(false);
                                                    /*
                                                    setTimeout(() => {
                                                        setSubmitting(false);
                                                        resetForm();
                        
                                                    }, 2000);
                                                    */
                                                }}
                                            >

                                                {({
                                                    values,
                                                    touched,
                                                    errors,
                                                    dirty,
                                                    isSubmitting,
                                                    handleSubmit,
                                                    handleReset,
                                                    handleChange,
                                                }) => (

                                                    <form class="form-horizontal ng-pristine ng-valid col-sm-10 m-auto" onSubmit={handleSubmit}>


                                                        <div class="form-group row">
                                                            <label htmlFor="companyName" class="col-sm-4 control-label" for="companyName">Firma Adı**</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="companyName" type="text" placeholder="Firma Adı Giriniz" value={values.companyName} onChange={handleChange} />
                                                                {errors.companyName && touched.companyName && (
                                                                    <div className="input-feedback">{errors.companyName}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="activityArea" class="col-sm-4 control-label" for="activityArea">Faaliyet Alanı**</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="activityArea" type="text" placeholder="Faaliyet Alanı Giriniz" value={values.activityArea} onChange={handleChange} />
                                                                {errors.activityArea && touched.activityArea && (
                                                                    <div className="input-feedback">{errors.activityArea}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="webAddress" class="col-sm-4 control-label" for="webAddress">Web Adresi*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="webAddress" type="text" placeholder="Web Adresi Giriniz"  value={values.webAddress} onChange={handleChange} />
                                                                {errors.webAddress && touched.webAddress && (
                                                                    <div className="input-feedback">{errors.webAddress}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="countOfWorker" class="col-sm-4 control-label" for="countOfWorker">Çalışan Sayısı</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="countOfWorker" type="number" placeholder="Çalışan Sayısı Giriniz" value={values.countOfWorker} onChange={handleChange} />
                                                                {errors.countOfWorker && touched.countOfWorker && (
                                                                    <div className="input-feedback">{errors.countOfWorker}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="address" class="col-sm-4 control-label" for="address">Adres</label>
                                                            <div class="col-sm-8">
                                                                <textarea class="form-control" id="address" row="4" type="text" placeholder="Adres Giriniz" value={values.address} onChange={handleChange} />
                                                                {errors.address && touched.address && (
                                                                    <div className="input-feedback">{errors.address}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="summary" class="col-sm-4 control-label" for="summary">Özet Bilgi*</label>
                                                            <div class="col-sm-8">
                                                                <textarea class="form-control" id="summary" row="4" type="text" placeholder="Özet Bilgi Giriniz" value={values.summary} onChange={handleChange} />
                                                                {errors.summary && touched.summary && (
                                                                    <div className="input-feedback">{errors.summary}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="email" class="col-sm-4 control-label" for="email">E-Mail*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="email" type="email" placeholder="E-Mail Giriniz" value={values.email} onChange={handleChange} />
                                                                {errors.email && touched.email && (
                                                                    <div className="input-feedback">{errors.email}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="password" class="col-sm-4 control-label" for="password">Şifre*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="password" type="password" placeholder="Şifre Giriniz" value={values.password} onChange={handleChange} />
                                                                {errors.password && touched.password && (
                                                                    <div className="input-feedback">{errors.password}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="confirmPassword" class="col-sm-4 control-label" for="confirmPassword">Şifre Tekrarı*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="confirmPassword" type="password" placeholder="Şifreyi Tekrar Giriniz" value={values.confirmPassword} onChange={handleChange} />
                                                                {errors.confirmPassword && touched.confirmPassword && (
                                                                    <div className="input-feedback">{errors.confirmPassword}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col-sm-offset-2 col-sm-10">
                                                                <div class="checkbox">
                                                                    <label>
                                                                        <input id="agree" type="checkbox" class="agree" value={values.agree} onChange={handleChange} /><span>Güncellenen bilgileriniz, doğruluğu kontrol edildiğinde sistem personellerimiz tarafından güncellenecektir. Okudum ve Onaylıyorum.</span></label>
                                                                    {errors.agree && (
                                                                        <div className="input-feedback">{errors.agree}</div>)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-offset-2 col-sm-10 col-md-6 btn-update">
                                                                <button class="btn btn-success w-100 fs-20 " type="submit" disabled={!dirty || isSubmitting} >Güncelle</button>
                                                            </div>
                                                        </div>








                                                        {/** 
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact4">Faaliyet Alanı**</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="inputContact4" type="text" defaultValue="" placeholder="Faaliyet Alanı Giriniz" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact5">Web Adresi*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="inputContact5" type="text" placeholder="Web Adresi Giriniz" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact6">Çalışan Sayısı</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="inputContact5" type="number" placeholder="Çalışan Sayısı Giriniz" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact7">Adres</label>
                                                            <div class="col-sm-8">
                                                                <textarea class="form-control" id="inputContact7" type="Adres" row="4" placeholder="Adres Giriniz"></textarea>

                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact8">Özet Bilgi</label>
                                                            <div class="col-sm-8">
                                                                <textarea class="form-control" id="inputContact8" row="4" placeholder="Özet Bilgi Giriniz"></textarea>

                                                            </div>
                                                        </div>
                                                        <hr color="#6a6f8c" />
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact2">E-Mail*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="inputContact2" type="email" placeholder="E-Mail Giriniz" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact3">Şifre*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="inputContact3" type="text" placeholder="Şifre Giriniz" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-4 control-label" for="inputContact33">Şifre Tekrarı*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="inputContact33" type="text" placeholder="Şifreyi Tekrar Giriniz" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col-sm-offset-2 col-sm-10">
                                                                <div class="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" class="agree" /><span>Güncellenen bilgileriniz, doğruluğu kontrol edildiğinde sistem personellerimiz tarafından güncellenecektir. Okudum ve Onaylıyorum.</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-offset-2 col-sm-10 col-md-6 btn-update">
                                                                <button class="btn btn-success w-100 fs-20 " type="submit">Güncelle</button>
                                                            </div>
                                                        </div>
                                                        */}
                                                    </form>
                                                )}
                                            </Formik>
                                        </div>
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
