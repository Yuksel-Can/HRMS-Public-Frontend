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
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
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
                                                                            email: '',
                                                                            password: '',
                                                                            remember: false,
                                                                        }}
                                                                        validationSchema={Yup.object({
                                                                            email: Yup.string().email("Geçerli bir mail giriniz").required('Eposta boş bırakılamaz'),
                                                                            password: Yup.string().required('Şifre boş bırakılamaz')
                                                                                .matches(
                                                                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                                                                                    "Minimum 6 karakter ve en az 1 büyük, 1 küçük, 1 sayı ve 1 özel karakter içermelidir."
                                                                                ),
                                                                            remember: Yup.boolean(),
                                                                        })}
                                                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                                                            console.log(values);
                                                                            setTimeout(() => {
                                                                                setSubmitting(false);
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
                                                                                {/*************************************************/}

                                                                                <label htmlFor="email" className="topMargin">
                                                                                    E-Posta*
                                                                                </label>
                                                                                <input
                                                                                    id="email"
                                                                                    type="email"
                                                                                    placeholder="E-Mail Giriniz"
                                                                                    className="input"
                                                                                    value={values.email}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.email && touched.email && (
                                                                                    <div className="input-feedback">{errors.email}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="password">İsim*</label>
                                                                                <input
                                                                                    id="password"
                                                                                    type="password"
                                                                                    placeholder="Şifre Giriniz"
                                                                                    className="input"
                                                                                    value={values.password}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.password && touched.password && (
                                                                                    <div className="input-feedback">{errors.password}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <div className="checkbox topMargin">
                                                                                    <input
                                                                                        id="remember"
                                                                                        type="checkbox"
                                                                                        value={values.remember}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                    <label htmlFor="remember" className="checkbox-label">
                                                                                        Beni Hatırla
                                                                                    </label>
                                                                                </div>
                                                                                {/*************************************************/}
                                                                                <div className="btn-submit">
                                                                                    <button type="submit" disabled={!dirty || isSubmitting}>
                                                                                        Giriş
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        )}
                                                                    </Formik>
                                                                </div>

                                                            </div>



                                                            <div class="sign-up-htm">


                                                                <div className="magic-form2">
                                                                    <Formik
                                                                        initialValues={{
                                                                            name: '',
                                                                            lastName: '',
                                                                            identificationNumber: '',
                                                                            birthDate: '',
                                                                            email: '',
                                                                            password: '',
                                                                            confirmPassword: '',
                                                                            agree: false,
                                                                        }}
                                                                        validationSchema={Yup.object({
                                                                            name: Yup.string().required('İsim boş bırakılamaz'),

                                                                            lastName: Yup.string().required('Soyisim boş bırakılamaz'),

                                                                            identificationNumber: Yup.string().required('TC boş bırakılamaz')
                                                                                .matches(/^[0-9]+$/, "Sadece rakam olmalıdır.").min(11, 'TC 11 rakam olmalıdır').max(11, 'TC 11 rakam olmalıdır'),

                                                                            //.test('len', 'Tc 11 rakam olmalıdır', val => val.length === 11),
                                                                            //birthDate: Yup.string().required('Soyisim boş bırakılamaz'),

                                                                            birthDate: Yup.string().typeError('Doğum Yılı Geçersizdir')
                                                                                .min(4, 'Minimum aralığın dışına çıkıldı').max(4, 'Maksimum aralığın dışına çıkıldı')
                                                                                .required('Doğum Yılı boş bırakılamaz'),

                                                                            email: Yup.string().email("Geçerli bir mail giriniz").required('Eposta boş bırakılamaz'),

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
                                                                            <form className="magic-form" onSubmit={handleSubmit}>
                                                                                {/*************************************************/}
                                                                                <label htmlFor="name">
                                                                                    Ad*
                                                                                </label>
                                                                                <input
                                                                                    id="name"
                                                                                    type="text"
                                                                                    placeholder="Ad Giriniz"
                                                                                    className="input"
                                                                                    value={values.name}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.name && touched.name && (
                                                                                    <div className="input-feedback">{errors.name}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="lastName">
                                                                                    Soyad*</label>
                                                                                <input
                                                                                    id="lastName"
                                                                                    type="text"
                                                                                    placeholder="Soyad Giriniz"
                                                                                    className="input"
                                                                                    value={values.lastName}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.lastName && touched.lastName && (
                                                                                    <div className="input-feedback">{errors.lastName}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="identificationNumber">
                                                                                    TC Kimlik*
                                                                                </label>
                                                                                <input
                                                                                    id="identificationNumber"
                                                                                    type="number"
                                                                                    maxLength="11"
                                                                                    placeholder="TC Giriniz"
                                                                                    className="input"
                                                                                    value={values.identificationNumber}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.identificationNumber && touched.identificationNumber && (
                                                                                    <div className="input-feedback">{errors.identificationNumber}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="birthDate">
                                                                                    Doğum Yılı*
                                                                                </label>
                                                                                <input
                                                                                    id="birthDate"
                                                                                    type="number"
                                                                                    maxLength="4"
                                                                                    placeholder="TC Giriniz"
                                                                                    className="input"
                                                                                    value={values.birthDate}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.birthDate && touched.birthDate && (
                                                                                    <div className="input-feedback">{errors.birthDate}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="email" className="topMargin lbl-block">
                                                                                    E-Posta*
                                                                                </label>
                                                                                <input
                                                                                    id="email"
                                                                                    type="email"
                                                                                    placeholder="E-Mail Giriniz"
                                                                                    className="input"
                                                                                    value={values.email}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.email && touched.email && (
                                                                                    <div className="input-feedback">{errors.email}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="password">
                                                                                    Şifre*
                                                                                </label>
                                                                                <input
                                                                                    id="password"
                                                                                    type="password"
                                                                                    placeholder="Şifre Giriniz"
                                                                                    className="input"
                                                                                    value={values.password}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.password && touched.password && (
                                                                                    <div className="input-feedback">{errors.password}</div>
                                                                                )}
                                                                                {/*************************************************/}
                                                                                <label htmlFor="confirmPassword">
                                                                                    Şifre Tekrarı*
                                                                                </label>
                                                                                <input
                                                                                    id="confirmPassword"
                                                                                    type="password"
                                                                                    placeholder="Şifre Giriniz"
                                                                                    className="input"
                                                                                    value={values.confirmPassword}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                {errors.confirmPassword && touched.confirmPassword && (
                                                                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                                                                )}
                                                                                {/*************************************************/}
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
                                                                                {/*************************************************/}
                                                                                <div className="btn-submit">
                                                                                    <button type="submit" disabled={!dirty || isSubmitting}>
                                                                                        Kaydol
                                                                                    </button>

                                                                                </div>
                                                                            </form>
                                                                        )}
                                                                    </Formik>
                                                                </div>



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
//last emek