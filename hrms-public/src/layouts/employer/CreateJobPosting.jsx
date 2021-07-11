import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import EmployerService from '../../services/employerService';
import JobTitleService from '../../services/jobTitleService';
import CityService from '../../services/cityService';
import build from '../../assets/images/build.jpg';
import { Formik } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

export default function CreateJobPosting() {

    let { id } = useParams();

    const [employer, setEmployer] = useState({});
    const [city, setCity] = useState({});
    const [jobTitle, setJobTitle] = useState({});

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.findBy(id).then(result => setEmployer(result.data.data))


        let cityService = new CityService()
        cityService.getAllCity().then(result => setCity(result.data.data))

        let jobTitleService = new JobTitleService()
        jobTitleService.getAllJobTitle().then(result => setJobTitle(result.data.data))

    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)   //sayfanın tepesine çıkmamıza yarar
    }, [])
    //let osman = parseInt(id);
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

                            {/*SOL ALT */}

                        </div>






                        <div class="col-md-8">
                            <div class="panel panel-default">
                                <div class="panel-body-right">

                                    <div class="h4 text-center fb mb-4">Yeni İş İlanı {id}</div>
                                    <div class="row pv-lg">
                                        <div class="container">
                                            <Formik
                                                initialValues={{
                                                    /*
                                                    city:{
                                                        id:'',
                                                    },
                                                    */
                                                    cityId:'',
                                                    description: '',
                                                    employer: {
                                                        id: parseInt(id),
                                                    },
                                                    endedDate: '',
                                                    // jobTitle->id: '',
                                                    maxSalary: '',
                                                    minSalary: '',
                                                    openPositing: '',
                                                    //visible: 'false',            
                                                    wayOfWorking: '',
                                                }}
                                                validationSchema={Yup.object({

                                                    /*
                                                    city: {
                                                        id: ''
                                                    },
                                                    */
                                                    // city: Yup.string().required("Şehir Boş Bırakılamaz"),


                                                  //  cityId: Yup.string().required("Şehir Boş Bırakılamaz"),
                                                    description: Yup.string().required("Başlık Alanı Boş Bırakılamaz"),
                                                    endedDate: Yup.date().required("İlan Bitiş Tarihi Boş Bırakılamaz"),
                                                    maxSalary: Yup.string().matches(/^[0-9]+$/, "Sadece rakam olmalıdır."),
                                                    minSalary: Yup.string().matches(/^[0-9]+$/, "Sadece rakam olmalıdır."),
                                                    openPositing: Yup.number().typeError("Lütfen Sayı Giriniz").required("Pozisyon Sayısı Boş Bırakılamaz"),
                                                    wayOfWorking: Yup.string().required("Çalışma biçimi boş bırakılamaz"),

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
                                                            <label htmlFor="description" class="col-sm-4 control-label" for="description">Başlık*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="description" type="text" placeholder="İlan Başlığı Giriniz" value={values.description} onChange={handleChange} />
                                                                {errors.description && touched.description && (
                                                                    <div className="input-feedback">{errors.description}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="endedDate" class="col-sm-4 control-label" for="endedDate">Şehir Seçiniz*</label>
                                                            <div class="col-sm-8">
                                                                {/*<input class="form-control" id="endedDate" type="text" placeholder=" Alanı Giriniz" value={values.city} onChange={handleChange} />*/}
                                                                <Dropdown 
                                                               //     placeholder='Şehir seçiniz' fluid selection search options={city.map((x, index) => {
                                                                 //       return { text: x.cityName,  }
                                                                    //})}
                                                                    //onBlur={formik.onBlur}
                                                                   /* onChange={(event, data) => setFieldValue("cityId", data.value)}/*id="cityId"*/ value={values.cityId}
                                                                />
                                                                
                                                                {errors.endedDate && touched.endedDate && (
                                                                    <div className="input-feedback">{errors.endedDate}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="endedDate" class="col-sm-4 control-label" for="endedDate">Bitiş Tarihi*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="endedDate" type="date" placeholder="Bitiş Tarihi Giriniz" value={values.endedDate} onChange={handleChange} />
                                                                {errors.endedDate && touched.endedDate && (
                                                                    <div className="input-feedback">{errors.endedDate}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="minSalary" class="col-sm-4 control-label" for="minSalary">Maaş Alt Aralığı</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="minSalary" type="text" placeholder="Maaş Alt Aralığı Giriniz" value={values.minSalary} onChange={handleChange} />
                                                                {errors.minSalary && touched.minSalary && (
                                                                    <div className="input-feedback">{errors.minSalary}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="maxSalary" class="col-sm-4 control-label" for="maxSalary">Maaş Üst Aralığı </label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="maxSalary" type="text" placeholder="Maaş Üst Aralığı Giriniz" value={values.maxSalary} onChange={handleChange} />
                                                                {errors.maxSalary && touched.maxSalary && (
                                                                    <div className="input-feedback">{errors.maxSalary}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="openPositing" class="col-sm-4 control-label" for="openPositing">Açık Pozisyon*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="openPositing" row="4" type="number" placeholder="Açık Pozisyon Sayısını Giriniz" value={values.openPositing} onChange={handleChange} />
                                                                {errors.openPositing && touched.openPositing && (
                                                                    <div className="input-feedback">{errors.openPositing}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label htmlFor="wayOfWorking" class="col-sm-4 control-label" for="wayOfWorking">Çalışma Biçimi*</label>
                                                            <div class="col-sm-8">
                                                                <input class="form-control" id="wayOfWorking" row="4" type="text" placeholder="Çalışma Biçmi Giriniz" value={values.wayOfWorking} onChange={handleChange} />
                                                                {errors.wayOfWorking && touched.wayOfWorking && (
                                                                    <div className="input-feedback">{errors.wayOfWorking}</div>)}
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-offset-2 col-sm-10 col-md-6 btn-update">
                                                                <button class="btn btn-success w-100 fs-20 btn-lg" type="submit" disabled={!dirty || isSubmitting} >İlan Oluştur    </button>
                                                            </div>
                                                        </div>

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
