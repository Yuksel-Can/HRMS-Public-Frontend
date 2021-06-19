import './App.css';
import imgLogo from './assets/images/logo.png';
/*import imgFormLogo from './assets/images/form-logo.png';*/
/*
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
*/
/*
import { FontAwesomeIcon } from './assets/css/font-awesome.min.css'
*/
//import { Button, Row, Col, Container } from 'react-bootstrap';
import { FaMapMarkedAlt, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
function App() {
  return (
    <div className="App">
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
                    <nav>
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



      <div class="slider_area">
        <div class="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-9    ">
                <div class="slider_text text-center">
                  <p>Human Resources Management System</p>
                  <h4>İş İlanları Senin İçin Listelendi</h4>

                  <div class="home_slider_form_container">
                    <form action="/#" id="home_search_form_1"
                      class="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
                      <div class="d-flex flex-row align-items-center justify-content-start">
                        <input type="search" class="home_search_input"
                          placeholder="İlan Yada Şirket veya Pozisyon Ara" required="required" />

                        <select class="dropdown_item_select home_search_input2">
                          <option>Şehir Seç</option>
                          <option>Category</option>
                          <option>Category</option>
                        </select>

                        <select class="dropdown_item_select home_search_input2">
                          <option>Pozisyon Seç</option>
                          <option>Price Type</option>
                          <option>Price Type</option>
                        </select>
                      </div>
                      <button type="submit" class="home_search_button">ARA</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="prising_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title text-center mb-100">

                <div class="container-xxl">
                  <div class="row">
                    <div class="col-lg-3 d-none d-lg-block">
                      <div class="sidebar">
                        <strong class="mb-3 mt-3">
                          <h4>Filtreler</h4>
                        </strong>
                        <div>
                          <aside class="component-job-filter shadow-sm">
                            <form action class="form">
                              <div class="search">
                                <input type="text" class="form-control shadow-sm"
                                  placeholder="Anahtar Kelime Gir" />
                              </div>
                              <hr />
                              <h5 class="font-weight-bold">Pozisyon</h5>
                              <ul class="checkbox-list">
                                <li>
                                  <label>
                                    <input type="checkbox" name="tümü" id="tümü" checked />
                                    <span class="checkbox"></span>
                                    <span class="text">Tümü</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" name="asdf" id="tam_zamanli" />
                                    <span class="checkbox"></span>
                                    <span class="text">Tam Zamanlı</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" name="asdf" id="yari_zamanli" />
                                    <span class="checkbox"></span>
                                    <span class="text">Yarı Zamanlı</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" name="asdf" id="asd" />
                                    <span class="checkbox"></span>
                                    <span class="text">Stajyer</span>
                                  </label>
                                </li>
                              </ul>
                              <hr />
                              <h5 class="font-weight-bold mt-3">Çalışma Biçimi</h5>

                              <div class="form-check">
                                <input class="form-check-input" type="radio"
                                  name="calisma_bicimi" id="tümüRadioDefault1" checked />
                                <label class="form-check-label" for="tümüRadioDefault1">
                                  Tümü
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio"
                                  name="calisma_bicimi" id="yüzyüzeRadioDefault2" />
                                <label class="form-check-label" for="yüzyüzeRadioDefault2">
                                  Yüz Yüze
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio"
                                  name="calisma_bicimi" id="uzaktanRadioDefault3" />
                                <label class="form-check-label" for="uzaktanRadioDefault3">
                                  Uzaktan
                                </label>
                              </div>
                              <hr />
                              <h5 class="font-weight-bold mt-3">Şehir</h5>

                              <select class="form-select form-select-lg mb-3 select-sehir"
                                aria-label=".form-select-lg example">
                                <option selected>Şehir Seçiniz</option>
                                <option value="istanbul">İstanbul</option>
                                <option value="ankara">Ankara</option>
                                <option value="izmir">İzmir</option>
                              </select>

                              <button type="submit" class="home_search_button w-100">ARA</button>
                            </form>

                          </aside>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="center">
                        <strong>
                          <h4>55 İş İlanı</h4>
                        </strong>
                        <div>
                          <div class="main-box clearfix">
                            <div class="table-responsive">
                              <table class="table user-list">
                                {/*                                 
                                <Container>
                                  <Row>
                                    <Col md={6}>1 of 2</Col>
                                    <Col md={6}>2 of 2</Col>
                                  </Row>
                                  <Row>
                                    <Col>1 of 3</Col>
                                    <Col>2 of 3</Col>
                                    <Col>3 of 3</Col>
                                  </Row>
                                </Container> */}
                                <thead>
                                  {/* <Container>
                                    <Row>
                                      <Col md={5}><span>İlan</span></Col>
                                      <Col md={3}><span>Bitiş Tarihi</span></Col>
                                      <Col md={1}><span>Durum</span></Col>
                                      <Col md={2}><span>Pozisyon </span></Col>
                                      <Col md={1}><span>Şehir</span></Col>
                                    </Row>
                                  </Container> */}
                                  <tr>
                                    <th class="userlist1" ><span>İlan</span></th>
                                    <th class="userlist2" ><span>Bitiş Tarihi</span></th>
                                    <th class="userlist3" ><span>Durum</span></th>
                                    <th class="userlist4" ><span>Pozisyon </span></th>
                                    <th class="userlist5" ><span>Şehir</span></th>

                                  </tr>
                                </thead>
                                <tbody>

                                  <tr class="">
                                    <td>
                                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        alt="avatar1" />
                                      <a href="/#" class="user-link">Geliştirici
                                        Aranıyoruz</a>
                                      <span class="user-subhead">Logo Yazılım</span>
                                    </td>
                                    <td>
                                      2013/08/04
                                    </td>
                                    <td class="text-center">
                                      <span class="label label-default">Aktif</span>
                                    </td>
                                    <td>
                                      Java Developer
                                    </td>
                                    <td class="td_city">
                                      <span class="fa-stack">
                                        {/* <i class="fa fa-square fa-stack-2x"></i>
                                          <i
                                            class="fa fa-map-marked-alt fa-stack-1x fa-inverse"></i> */}
                                        <FaMapMarkedAlt size="1.5em"/>

                                      </span>
                                      Ankara

                                    </td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                          alt="avatar2" />
                                        <a href="/#" class="user-link">Geliştirici
                                          Aranıyoruz</a>
                                        <span class="user-subhead">Logo Yazılım</span>
                                      </td>
                                      <td>
                                        2014/04/28
                                      </td>
                                      <td class="text-center">
                                        <span class="label label-default">Aktif</span>
                                      </td>
                                      <td>
                                        C# Developer
                                      </td>
                                      <td class="td_city">
                                        <span class="fa-stack">

                                          {/* <i class="fa fa-square fa-stack-2x"></i>
                                          <i
                                            class="fa fa-map-marked-alt fa-stack-1x fa-inverse"></i> */}
                                          <FaMapMarkedAlt size="1.5em"/>
                                        </span>
                                        İstanbul

                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                          alt="avatar3" />
                                        <a href="/#" class="user-link">Geliştirici
                                          Aranıyoruz</a>
                                        <span class="user-subhead">Logo Yazılım</span>
                                      </td>
                                      <td>
                                        2012/12/01
                                      </td>
                                      <td class="text-center">
                                        <span class="label label-default">Aktif</span>
                                      </td>
                                      <td>
                                        Frontend Developer
                                      </td>
                                      <td class="td_city">
                                        <span class="fa-stack">

                                          {/* <i class="fa fa-square fa-stack-2x"></i>
                                          <i
                                            class="fa fa-map-marked-alt fa-stack-1x fa-inverse"></i> */}
                                          <FaMapMarkedAlt size="1.5em"/>
                                        </span>
                                        İzmir

                                      </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <nav aria-label="Page navigation example">
                              <ul class="pagination justify-content-end mr-4 pr-2 ">
                                <li class="page-item">
                                  <a class="page-link" href="/#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                  </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="/#">1</a></li>
                                <li class="page-item"><a class="page-link" href="/#">2</a></li>
                                <li class="page-item"><a class="page-link" href="/#">3</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="/#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
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



      <div class="lets_launch launch_bg_1 overlay2">
        <div class="launch_text text-center">
          <h3>İş İlanları Senin İçin Listelendi</h3>
          <p>Human Resources Management System</p>
          <p>İlanlara başvurabilmek ilan verebilmek gelecek ve kariyer anlamında ilk adımı atabilmek için üye
            olabilirsin.</p>
          <div class="chat">
            <a class="boxed_btn_green" href="/#">
              <i class="flaticon-chat"></i>
              <span>Üye Ol</span>
            </a>
            <a class="boxed_btn_green2" href="/#">
              <span>Giriş Yap</span>
            </a>
          </div>
        </div>
      </div>

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
                    <li><a href="/#">Üye Ol</a></li>
                    <li><a href="/#">Giriş Yap</a></li>
                    <li><a href="/#">İlan Ara</a></li>
                    <li><a href="/#">Profil</a></li>
                  </ul>

                </div>
              </div>
              <div class="col-xl-2 col-md-6 col-lg-2">
                <div class="footer_widget">
                  <h3 class="footer_title">
                    İş Veren
                  </h3>
                  <ul>
                    <li><a href="/#">Üye Ol</a></li>
                    <li><a href="/#">Giriş Yap</a></li>
                    <li><a href="/#">İlan Ver</a></li>
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
                    <input type="text" placeholder="İlan yada pozisyon giriniz" />
                    <button type="submit">Ara</button>
                  </form>
                  <p class="newsletter_text">Üye olmadan ilanlara başvuramazsınız</p>
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
                    href="https://www.github.com/yuksel-can" rel="noopener noreferrer" target="_blank">Can Yüksel</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
