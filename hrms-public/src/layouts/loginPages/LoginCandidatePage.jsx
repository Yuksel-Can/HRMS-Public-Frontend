import React from 'react'
import EmployerLogin from './EmployerLogin';
import CandidateLogin from './CandidateLogin';
import { toast, ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';

import Navi from '../default/Navi';
import Footer from '../default/Footer';
import { Formik } from 'formik';
import * as Yup from "yup";
export default function LoginCandidatePage() {


    const successToast = () => {
        toast.success("İşlem Başarılı", {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            toastId: 1
        });
    }
    const errorToast = () => {
        toast.error("İşlem Başarısız", {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            toastId: 1
        });
    }

    return (

        <div class="mt">
            <ToastContainer />

            <Navi />

            <div className="mt">
                <div class="prising_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="section_title text-center mb-100">
                                    <div class="container-xxl">
                                        <div class="row">
                                            <div class="col-lg-6">

                                                <div class="login-wrap">
                                                    <div class="login-html">
                                                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">GİRİŞ YAP</label>
                                                        <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">ÜYE OL</label>
                                                        <div class="login-form">

                                                            <div class="sign-in-htm">

                                                                
                                                                <div className="magic-form2">
                                                                    <Formik
                                                                        initialValues={{
                                                                            name: '',
                                                                            email: '',
                                                                            agree: false,
                                                                            favoriteColor: '',
                                                                        }}
                                                                        validationSchema={Yup.object({
                                                                            name: Yup.string().required('İsim boş bırakılamaz'),
                                                                            email: Yup.string().email("Geçerli bir mail giriniz").required('Email boş bırakılamaz'),
                                                                            agree: Yup.bool().oneOf([true], 'Koşulları kabul etmelisiniz'),
                                                                            favoriteColor: Yup.string()
                                                                                .required('Hadi ama herkesin sevdiği bir renk vardır!')
                                                                                .oneOf(['red', 'blue', 'green']),
                                                                        })}
                                                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                                                            console.log(values);
                                                                            setTimeout(() => {
                                                                                setSubmitting(true);
                                                                                resetForm();
                                                                                
                                                                            }, 2000);
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
                                                                            <form className="magic-form" onSubmit={handleSubmit}>
                                                                                
                                                                                <label htmlFor="name">İsim*</label>
                                                                                <input
                                                                                    id="name"
                                                                                    type="text"
                                                                                    placeholder="Didem.."
                                                                                    className="input"
                                                                                    value={values.name}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.name && touched.name && (
                                                                                    <div className="input-feedback">{errors.name}</div>
                                                                                )}

                                                                                <label htmlFor="email" className="topMargin">
                                                                                    Email*
                                                                                </label>
                                                                                <input
                                                                                    id="email"
                                                                                    type="email"
                                                                                    placeholder="kucukkaraaslan.didem@gmail.com"
                                                                                    className="input"
                                                                                    value={values.email}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.email && touched.email && (
                                                                                    <div className="input-feedback">{errors.email}</div>
                                                                                )}

                                                                                <label htmlFor="favoriteColor" className="topMargin">
                                                                                    Favori Renk
                                                                                </label>
                                                                                <select
                                                                                    id="favoriteColor"
                                                                                    value={values.favoriteColor}
                                                                                    onChange={handleChange}
                                                                                    style={{
                                                                                        marginTop: 10,
                                                                                        width: '150px',
                                                                                        padding: '10px 15px',
                                                                                        outline: 'none',
                                                                                        borderRadius: '10px'
                                                                                    }}
                                                                                >
                                                                                    <option value="" label="Renk seç.." />
                                                                                    <option value="red" label="Kırmızı" />
                                                                                    <option value="blue" label="Mavi" />
                                                                                    <option value="green" label="Yeşil" />
                                                                                </select>

                                                                                {errors.favoriteColor && touched.favoriteColor && (
                                                                                    <div className="input-feedback">{errors.favoriteColor}</div>
                                                                                )}

                                                                                <div className="checkbox topMargin">
                                                                                    <input
                                                                                        id="agree"
                                                                                        type="checkbox"
                                                                                        value={values.agree}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                    <label htmlFor="agree" className="checkbox-label">
                                                                                        Sözleşmeyi okudum kabul ediyorum.
                                                                                    </label>
                                                                                </div>
                                                                                {errors.agree && (
                                                                                    <div className="input-feedback">{errors.agree}</div>
                                                                                )}

                                                                                <button type="submit" disabled={!dirty || isSubmitting}>
                                                                                    Kaydol
                                                                                </button>
                                                                            </form>
                                                                        )}
                                                                    </Formik>
                                                                </div>
                                                            </div>



                                                            <div class="sign-up-htm">
                                                                <div class="group">
                                                                    <label for="user" class="label">Username</label>
                                                                    <input id="user" type="text" class="input" />
                                                                </div>
                                                                <div class="group">
                                                                    <label for="pass" class="label">Password</label>
                                                                    <input id="pass" type="password" class="input" data-type="password" />
                                                                </div>
                                                                <div class="group">
                                                                    <label for="pass" class="label">Repeat Password</label>
                                                                    <input id="pass" type="password" class="input" data-type="password" />
                                                                </div>
                                                                <div class="group">
                                                                    <label for="pass" class="label">Email Address</label>
                                                                    <input id="pass" type="text" class="input" />
                                                                </div>
                                                                <div class="group">
                                                                    <input type="submit" class="button" value="Sign Up" />
                                                                </div>
                                                                <div class="foot-lnk">
                                                                    <label for="tab-1">Already Member?</label>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-lg-6">

                                                <div class="login-wrap">
                                                    <div class="login-html">
                                                        <div class="login-form">
                                                            <div className="height-login">
                                                                <div class="employerLoginButton">
                                                                    <Route exact path="/login1" component={EmployerLogin} />
                                                                    <Route exact path="/login2" component={CandidateLogin} />

                                                                    {/*<EmployerLogin />*/}
                                                                    {/**<CandidateLogin />**/}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
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