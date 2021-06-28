import React from 'react'
import imgLogo from '../../assets/images/logo.png';

export default function Navi() {

    return (
        <div>

            <header>
                <div class="header-area ">
                    <div id="sticky-header" class="main-header-area">
                        <div class="container-fluid p-0">
                            <div class="row align-items-center no-gutters">
                                <div class="col-xl-2 col-lg-2">
                                    <div class="logo-img">
                                        <a href="index.html">
                                            <img src={imgLogo} alt="imgLogo" />

                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7">
                                    <div class="main-menu  d-none d-lg-block">
                                        <nav >
                                            <ul id="navigation">
                                                <li><a class="active" href="index.html">Ana Sayfa</a></li>
                                                <li><a href="package.html">İlan Ara</a></li>
                                                <li><a href="/#">Profil <i class="ti-angle-down"></i></a>
                                                    <ul class="submenu">
                                                        <li><a href="blog.html">Profil</a></li>
                                                        <li><a href="single-blog.html">single-blog</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/#">Özgeçmişler <i class="ti-angle-down"></i></a>
                                                    <ul class="submenu">
                                                        <li><a href="elements.html">elements</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="Support.html">İlan Ver</a></li>
                                                <li><a href="about.html">Hakkımızda</a></li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                                <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div class="log_chat_area d-flex align-items-center">
                                        <a href="#test-form" class="login popup-with-form">
                                            <i class="flaticon-user"></i>
                                            <span>Giriş Yap</span>
                                        </a>
                                        <div class="live_chat_btn">
                                            <a class="boxed_btn_green" href="/#">
                                                <i class="flaticon-chat"></i>
                                                <span>Üye Ol</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </div>
    )
}


