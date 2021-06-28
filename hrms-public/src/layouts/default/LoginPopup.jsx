import React from 'react'
import formLogo from '../../assets/images/form-logo.png';

export default function LoginPopup() {
    return (
        <div>

            <form id="test-form" class="white-popup-block mfp-hide">
                <div class="popup_box ">
                    <div class="popup_inner">
                        <div class="logo text-center">
                            <a href="/#">
                                <img src={formLogo} alt="logo1" />
                            </a>
                        </div>
                        <h3>Giriş Yap</h3>
                        <form action="/#">
                            <div class="row">
                                <div class="col-xl-12 col-md-12">
                                    <input type="email" placeholder="Mail Giriniz" />
                                </div>
                                <div class="col-xl-12 col-md-12">
                                    <input type="password" placeholder="Şifre Giriniz" />
                                </div>
                                <div class="col-xl-12">
                                    <button type="submit" class="boxed_btn_green">Giriş Yap</button>
                                </div>
                            </div>
                        </form>
                        <p class="doen_have_acc">Hesabınız yok mu? <a class="dont-hav-acc" href="#test-form2">Üye Ol</a>
                        </p>
                    </div>
                </div>
            </form>


            <form id="test-form2" class="white-popup-block mfp-hide">
                <div class="popup_box ">
                    <div class="popup_inner">
                        <div class="logo text-center">
                            <a href="/#">
                                <img src={formLogo} alt="logo1" />
                            </a>
                        </div>
                        <h3>Kayıt</h3>
                        <form action="#">
                            <div class="row">
                                <div class="col-xl-12 col-md-12">
                                    <input type="email" placeholder="Enter email" />
                                </div>
                                <div class="col-xl-12 col-md-12">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div class="col-xl-12 col-md-12">
                                    <input type="Password" placeholder="Confirm password" />
                                </div>
                                <div class="col-xl-12">
                                    <button type="submit" class="boxed_btn_green">Kayıt Ol</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </form>

        </div >
    )
}
