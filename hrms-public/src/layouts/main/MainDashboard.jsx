import React from 'react'
import Navi from '../default/Navi';
import Footer from '../default/Footer';
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify';
//import LoginPopup from '../default/LoginPopup';
import { Route } from 'react-router-dom';
import MainContext from './MainContext';
import LoginCandidatePage from '../loginPages/LoginCandidatePage';
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

    return (


        <div class="mt">


            <Navi />
            <Route exact path="/" component={MainContext} />
            <Route exact path="/login1" component={LoginCandidatePage} />

            <Footer />


            {/* Buraya <LoginPopup/> gelcek*/}


        </div >
    )
}


