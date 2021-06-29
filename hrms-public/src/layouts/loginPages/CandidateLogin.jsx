import React from 'react'
import { toast } from 'react-toastify';

export default function CandidateLogin() {

    const successToast = () =>{
        toast.success("İşlem Başarılı",{
            className:"custom-toast",
            draggable:true,
            position:toast.POSITION.BOTTOM_CENTER,
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
        <div>

            <a href="#/">  <button onClick={successToast}>ÜYE GİRİŞİ</button></a>

        </div>
    )
}
