import React from 'react'
import imgLogo from '../assets/images/logo.png';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div>

            <footer class="footer">
                <div class="footer_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 col-lg-3">
                                <div class="footer_widget">
                                    <div class="footer_logo">
                                        <a href="/#">
                                            <img src={imgLogo} alt="imgLogo" />
                                        </a>
                                    </div>
                                    <p class="footer_text doanar"> <a class="first" href="/#">+90 54* *** ** **
                                    </a> <br />
                                        <a href="/#">yukselcanozdemir@gmail.com</a>
                                    </p>
                                    <div class="socail_links">
                                        <ul>
                                            <li>
                                                <a href="/#">
                                                    <FaFacebookSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <FaTwitterSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-lg-3">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        Aday
                                    </h3>
                                    <ul>
                                        <li><a href="/#">??ye Ol</a></li>
                                        <li><a href="/#">Giri?? Yap</a></li>
                                        <li><a href="/#">??lan Ara</a></li>
                                        <li><a href="/#">Profil</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-xl-2 col-md-6 col-lg-2">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        ???? Veren
                                    </h3>
                                    <ul>
                                        <li><a href="/#">??ye Ol</a></li>
                                        <li><a href="/#">Giri?? Yap</a></li>
                                        <li><a href="/#">??lan Ver</a></li>
                                        <li><a href="/#">Profil</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-lg-4">
                                <div class="footer_widget">
                                    <h3 class="footer_title">
                                        Ara
                                    </h3>
                                    <form action="/#" class="newsletter_form">
                                        <input type="text" placeholder="??lan yada pozisyon giriniz" />
                                        <button type="submit">Ara</button>
                                    </form>
                                    <p class="newsletter_text">??ye olmadan ilanlara ba??vuramazs??n??z</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copy-right_text">
                    <div class="container">
                        <div class="footer_border"></div>
                        <div class="row">
                            <div class="col-xl-12">
                                <p class="copy_right text-center">
                                    Copyright &copy;
                                    2021 All rights reserved | This
                                    template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a
                                        href="https://www.github.com/yuksel-can" rel="noopener noreferrer" target="_blank">Can Y??ksel</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
