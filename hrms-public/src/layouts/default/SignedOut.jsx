import React from 'react'
import { Link } from 'react-router-dom'


export default function SignedOut(props) {


    return (
        <div>


            <div class="log_chat_area d-flex align-items-center">
                <a  class="login popup-with-form">
                    <i class="flaticon-user"></i>
                    <span><Link to={'/loginCandidate'}> Giriş Yap</Link></span>
                </a>
                <div class="live_chat_btn">
                    <a class="boxed_btn_green">
                        <i class="flaticon-chat"></i>
                        <span><Link to={'/loginCandidate'}>Üye Ol</Link></span>
                    </a>
                </div>
            </div>

            {/*
            <div class="log_chat_area d-flex align-items-center">
                <img src="https://docs.kariyer.net/candidate/000/024/997/avatar/2499726020210317030547169.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUqU2Hqy5hW%2FoAa7PeIDeXDL0F414S5lBw1%2BmwLyqIVKK39ir2CT1stIUULNs%2FYjco2ayXQMRCZZm!e!" alt="" />
                <div class="live_chat_btn">
                    <a class="boxed_btn_green2" href="/#">
                        <i class="flaticon-chat"></i>
                        <span>Üye Ol</span>
                    </a>
                </div>
            </div>
            */}


        </div>
    )
}
