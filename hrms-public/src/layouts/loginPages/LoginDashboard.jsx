import React from 'react';
import LoginEmployerLink from './LoginEmployerLink';
import LoginCandidateLink from './LoginCandidateLink';
import { toast, ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';

import Navi from '../default/Navi';
import Footer from '../default/Footer';
import { Formik } from 'formik';
import * as Yup from "yup";
import LoginCandidateForm from './LoginCandidateForm';
import LoginEmployerForm from './LoginEmployerForm';
import LoginCandidateName from './LoginCandidateName';
import LoginEmployerName from './LoginEmployerName';
export default function LoginDashboard() {


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
                                                        <Route exact path="/loginCandidate"  component={LoginCandidateName} />
                                                        <Route exact path="/loginEmployer"  component={LoginEmployerName} />
                                                        

                                                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">GİRİŞ YAP</label>
                                                        <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">ÜYE OL</label>
                                                        <div class="login-form">

                                                        <Route exact path="/loginCandidate"  component={LoginCandidateForm} />
                                                        <Route exact path="/loginEmployer"  component={LoginEmployerForm} />
                                                           {/* <LoginCandidatePage /> */}

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
                                                                    <Route exact path="/loginCandidate" component={LoginCandidateLink} />
                                                                    <Route exact path="/loginEmployer" component={LoginEmployerLink} />

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