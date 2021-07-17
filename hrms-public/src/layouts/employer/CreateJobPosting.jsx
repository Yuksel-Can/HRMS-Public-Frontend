import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import EmployerService from '../../services/employerService';
import JobTitleService from '../../services/jobTitleService';
import JobPostingService from '../../services/jobPostingService';
import WayOfWorkingService from '../../services/wayOfWorking';
import WorkingTimeService from '../../services/workingTime';
import CityService from '../../services/cityService';
import build from '../../assets/images/build.jpg';
import { useFormik } from 'formik';
import { Input, Button, Label, Form, Dropdown } from 'semantic-ui-react'
import * as Yup from "yup";
import { Link } from 'react-router-dom';
//import { Form, Dropdown } from 'react-bootstrap';

export default function CreateJobPosting() {

    let { id } = useParams();

    const [employer, setEmployer] = useState({});
    const [cities, setCities] = useState([]);
    const [jobTitle, setJobTitle] = useState([]);
    const [wayOfWorkings, setWayOfWorkings] = useState([]);
    const [workingTimes, setWorkingTimes] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.findBy(id).then(result => setEmployer(result.data.data))


        let cityService = new CityService()
        cityService.getAllCity().then(result => setCities(result.data.data))

        let jobTitleService = new JobTitleService()
        jobTitleService.getAllJobTitle().then(result => setJobTitle(result.data.data))

        let wayOfWorkingService = new WayOfWorkingService()
        wayOfWorkingService.getAllWayOfWorking().then(result => setWayOfWorkings(result.data.data))

        let workingTimeService = new WorkingTimeService()
        workingTimeService.getAllWorkingTime().then(result => setWorkingTimes(result.data.data))

    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)   //sayfanın tepesine çıkmamıza yarar
    }, [])

    const jobPostingService = new JobPostingService();

    const SignupSchema = Yup.object().shape({

        city: Yup.object().required("Şehir Boş Bırakılamaz"),
        description: Yup.string().required("Başlık Alanı Boş Bırakılamaz"),
        endedDate: Yup.date().required("İlan Bitiş Tarihi Boş Bırakılamaz"),
        jobTitle: Yup.object().required("Departman boş bırakılamaz"),
        maxSalary: Yup.string().matches(/^[0-9]+$/, "Sadece rakam olmalıdır."),
        minSalary: Yup.string().matches(/^[0-9]+$/, "Sadece rakam olmalıdır."),
        openPositing: Yup.number().typeError("Lütfen Sayı Giriniz").required("Pozisyon Sayısı Boş Bırakılamaz"),
        wayOfWorking: Yup.object().required("Çalışma biçimi boş bırakılamaz"),
        workingTime: Yup.object().required("Çalışma zamanı boş bırakılamaz"),
    });
    /******/
    const formik = useFormik({
        initialValues: {

            city: {
                id: ''
            },
            description: '',
            employer: {
                id: parseInt(id),
            },
            endedDate: '',
            jobTitle: {
                id: ''
            },
            maxSalary: '',
            minSalary: '',
            openPositing: '',
            wayOfWorking:{
                id: ''
            },
            workingTime:{
                id: ''
            }
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            jobPostingService.add(values).then(alert("İlan Başarıyla Eklendi"));

           // alert(JSON.stringify(values, null, 2))
        },
    });
    /*********/

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    const handleRichTextEditorInput = (value) => {
        formik.setFieldValue("description", value)
    }

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



                        {/*Sağ kısım */}
                        <div class="col-md-8">
                            <div class="panel panel-default">
                                <div class="panel-body-right">

                                    <div class="h4 text-center fb mb-4">Yeni İş İlanı {id}</div>
                                    <div class="row pv-lg">
                                        <div class="container">



                                            {/*console.log(cities)*/}

                                            <Form class="form-horizontal ng-pristine ng-valid col-sm-10 m-auto" onSubmit={formik.handleSubmit}>

                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="city" class="col-sm-4 control-label" for="endedDate">Şehir*</label>
                                                        <div class="col-sm-8">
                                                            <Dropdown
                                                                placeholder="Şehir Seçiniz"
                                                                fluid
                                                                selection
                                                                search
                                                                options={cities?.map((x, index) => {
                                                                    return { text: x.cityName, key: x.index, value: x.id }
                                                                })}
                                                                onChange={(event, data) =>
                                                                    formik.setFieldValue("city[id]", data.value)
                                                                }
                                                                value={formik.values.city[id]}
                                                            />
                                                            {formik.errors.city && formik.touched.city && (
                                                                <div className="input-feedback">{formik.errors.city}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="description" class="col-sm-4 control-label" for="description">İlan Başlığı*</label>
                                                        <div class="col-sm-8">
                                                            <input class="form-control" id="description" row="4" type="text" placeholder="Başlık Giriniz" value={formik.values.description} onChange={formik.handleChange} />
                                                            {formik.errors.description && formik.touched.description && (
                                                                <div className="input-feedback">{formik.errors.description}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="endedDate" class="col-sm-4 control-label" for="endedDate">Bitiş Tarihi*</label>
                                                        <div class="col-sm-8">
                                                            <input class="form-control" id="endedDate" type="date" placeholder="Bitiş Tarihi Giriniz" value={formik.values.endedDate} onChange={formik.handleChange} />
                                                            {formik.errors.endedDate && formik.touched.endedDate && (
                                                                <div className="input-feedback">{formik.errors.endedDate}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="jobTitle" class="col-sm-4 control-label" for="jobTitle">Departman*</label>
                                                        <div class="col-sm-8">
                                                            <Dropdown
                                                                placeholder="Departman Seçiniz"
                                                                fluid
                                                                selection
                                                                search
                                                                options={jobTitle?.map((x, index) => {
                                                                    return { text: x.title, key: x.index, value: x.id }
                                                                })}
                                                                onChange={(event, data) =>
                                                                    formik.setFieldValue("jobTitle[id]", data.value)
                                                                }
                                                                value={formik.values.jobTitle[id]}
                                                            />
                                                            {formik.errors.jobTitle && formik.touched.jobTitle && (
                                                                <div className="input-feedback">{formik.errors.jobTitle}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="minSalary" class="col-sm-4 control-label" for="minSalary">Maaş Alt Aralığı</label>
                                                        <div class="col-sm-8">
                                                            <input class="form-control" id="minSalary" type="text" placeholder="Maaş Alt Aralığı Giriniz" value={formik.values.minSalary} onChange={formik.handleChange} />
                                                            {formik.errors.minSalary && formik.touched.minSalary && (
                                                                <div className="input-feedback">{formik.errors.minSalary}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="maxSalary" class="col-sm-4 control-label" for="maxSalary">Maaş Üst Aralığı </label>
                                                        <div class="col-sm-8">
                                                            <input class="form-control" id="maxSalary" type="text" placeholder="Maaş Üst Aralığı Giriniz" value={formik.values.maxSalary} onChange={formik.handleChange} />
                                                            {formik.errors.maxSalary && formik.touched.maxSalary && (
                                                                <div className="input-feedback">{formik.errors.maxSalary}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="openPositing" class="col-sm-4 control-label" for="openPositing">Açık Pozisyon*</label>
                                                        <div class="col-sm-8">
                                                            <input class="form-control" id="openPositing" row="4" type="number" placeholder="Açık Pozisyon Sayısını Giriniz" value={formik.values.openPositing} onChange={formik.handleChange} />
                                                            {formik.errors.openPositing && formik.touched.openPositing && (
                                                                <div className="input-feedback">{formik.errors.openPositing}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="wayOfWorking" class="col-sm-4 control-label" for="wayOfWorking">Çalışma Biçimi*</label>
                                                        <div class="col-sm-8">
                                                            <Dropdown
                                                                placeholder="Çalışma Biçimi Seçiniz"
                                                                fluid
                                                                selection
                                                                search
                                                                options={wayOfWorkings?.map((x, index) => {
                                                                    return { text: x.name, key: x.index, value: x.id }
                                                                })}
                                                                onChange={(event, data) =>
                                                                    formik.setFieldValue("wayOfWorking[id]", data.value)
                                                                }
                                                                value={formik.values.wayOfWorking[id]}
                                                            />
                                                            {formik.errors.wayOfWorking && formik.touched.wayOfWorking && (
                                                                <div className="input-feedback">{formik.errors.wayOfWorking}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>
                                                <Form.Field>
                                                    <div class="form-group row">
                                                        <label htmlFor="workingTime" class="col-sm-4 control-label" for="workingTime">Çalışma Zamanı*</label>
                                                        <div class="col-sm-8">
                                                            <Dropdown
                                                                placeholder="Departman Zamanı"
                                                                fluid
                                                                selection
                                                                search
                                                                options={workingTimes?.map((x, index) => {
                                                                    return { text: x.name, key: x.index, value: x.id }
                                                                })}
                                                                onChange={(event, data) =>
                                                                    formik.setFieldValue("workingTime[id]", data.value)
                                                                }
                                                                value={formik.values.workingTime[id]}
                                                            />
                                                            {formik.errors.workingTime && formik.touched.workingTime && (
                                                                <div className="input-feedback">{formik.errors.workingTime}</div>)}
                                                        </div>
                                                    </div>
                                                </Form.Field>



                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10 col-md-6 btn-update">
                                                        <button class="btn btn-success w-100 fs-20 btn-lg" type="submit" disabled={!formik.dirty /*||*/ && formik.isSubmitting} >İlan Oluştur    </button>
                                                    </div>
                                                </div>

                                            </Form>




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
