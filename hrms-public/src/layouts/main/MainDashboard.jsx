import React from 'react'
import Navi from '../default/Navi';
import Footer from '../default/Footer';
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify';
//import LoginPopup from '../default/LoginPopup';
import { Route } from 'react-router-dom';
import MainContext from './MainContext';
import LoginCandidateForm from '../loginPages/LoginCandidateForm';
import LoginEmployerForm from '../loginPages/LoginEmployerForm';
import LoginDashboard from '../loginPages/LoginDashboard';
import JobPostingDetailDashboard from '../jobPostingPages/JobPostingDetailDashboard';
import { useEffect } from 'react';
import EmployerProfile from '../employer/EmployerProfile';
import CreateJobPosting from '../employer/CreateJobPosting';
export default function MainDashboard() {


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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (


        <div class="mt">


            <Navi />


            <Route exact path="/" component={MainContext} />
            <Route exact path="/loginCandidate" component={LoginDashboard} />
            <Route exact path="/loginEmployer" component={LoginDashboard} />
            <Route exact path="/jobpostings/:id" component={JobPostingDetailDashboard} />
            <Route exact path="/employer/:id/profile" component={EmployerProfile} />
            <Route exact path="/employer/:id/newJobPosting" component={CreateJobPosting} />
            <Footer />


            {/* Buraya <LoginPopup/> gelcek*/}


        </div >
    )
}


