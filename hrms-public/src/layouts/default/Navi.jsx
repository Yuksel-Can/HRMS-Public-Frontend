import React, { useState } from 'react'
import imgLogo from '../../assets/images/logo.png';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function Navi() {


    const [isAuthenticated, setIsAuthenticated] = useState(true);
    /*history*/
    const history = useHistory();
    /*history*/

    function handleSignOut(params) {
        setIsAuthenticated(false);
        history.push("/");
    }

    function handleSignIn(params) {
        setIsAuthenticated(true);
    }

    return (
        <div>

            <header>
                <div class="header-area ">
                    <div id="sticky-header" class="main-header-area">
                        <div class="container-fluid p-0">
                            <div class="row align-items-center no-gutters">
                                <div class="col-xl-2 col-lg-2">
                                    <div class="logo-img">
                                        <a href="#/">
                                            <img src={imgLogo} alt="imgLogo" />

                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7">
                                    <div class="main-menu  d-none d-lg-block">
                                        <nav >
                                            <ul id="navigation">
                                                <li><a /**class="active"**/><NavLink exact to="/"> Ana Sayfa</NavLink></a></li>
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

                                    {
                                        isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />
                                    }

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


