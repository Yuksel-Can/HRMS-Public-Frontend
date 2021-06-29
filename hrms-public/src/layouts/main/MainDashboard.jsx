import React from 'react'
import Navi from '../default/Navi';
import SearchArea from '../default/SerachArea';
import Sidebar from './Sidebar';
import BottomSection from '../default/BottomSection';
import JobPostingList from '../../pages/JobPostingList';
import Footer from '../default/Footer';
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify';
import EmployerLogin from '../loginPages/EmployerLogin';
import CandidateLogin from '../loginPages/CandidateLogin';
//import LoginPopup from '../default/LoginPopup';
export default function MainDashboard() {

    
    const successToast = () =>{
        toast.success("İşlem Başarılı",{
            className:"custom-toast",
            draggable:true,
            position:toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            toastId: 1
        });
    }
    const errorToast = () =>{
        toast.error("İşlem Başarısız",{
            className:"custom-toast",
            draggable:true,
            position:toast.POSITION.BOTTOM_CENTER,
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
                                                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
                                                        <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                                                        <div class="login-form">
                                                            <div class="sign-in-htm">
                                                                <div class="group">
                                                                    <label for="user" class="label">Username</label>
                                                                    <input id="user" type="text" class="input" />
                                                                </div>
                                                                <div class="group">
                                                                    <label for="pass" class="label">Password</label>
                                                                    <input id="pass" type="password" class="input" data-type="password" />
                                                                </div>
                                                                <div class="group">
                                                                    <input id="check" type="checkbox" class="check" checked />
                                                                    <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                                                </div>
                                                                <div class="group">
                                                                    <input type="submit" class="button" value="Sign In" />
                                                                </div>
                                                                <div class="hr"></div>
                                                                <div class="foot-lnk">
                                                                    <a href="/#">Forgot Password?</a>
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
                                                                <div class="hr"></div>
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
                                                                   
                                                                    <EmployerLogin/>
                                                                    <CandidateLogin/>
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



            <Footer />

        </div>
    )
}


