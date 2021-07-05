import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import EmployerService from '../../services/employerService';

export default function EmployerProfile() {


    let { id } = useParams();

    const [employer, setEmployer] = useState({});

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.findBy(id).then(result => setEmployer(result.data.data))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)   //sayfanın tepesine çıkmamıza yarar
    }, [])


    return (
        <div>

            <div class="mt-120">


                <div class="container bootstrap snippets bootdey">
                    <div class="row ng-scope">
                        <div class="col-md-4">
                            <div class="panel panel-default">
                                <div class="panel-body-left1 text-center">
                                    <div class="pv-lg"><img class="center-block img-responsive img-circle img-thumbnail thumb96" src="../../assets/images/build.jpg" alt="Contact"/></div>
                                    {/*https://www.bootdey.com/img/Content/avatar/avatar6.png */}
                                    <h3 class="m0 text-bold">Audrey Hunt</h3>
                                    <div class="mv-lg">
                                        <p>Haello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                                    </div>
                                    <div class="text-center"><a class="btn btn-primary" href="">Send message</a></div>
                                </div>
                            </div>
                            <div class="panel panel-default hidden-xs hidden-sm pb-left">
                                <div class="panel-heading">
                                    <div class="panel-title text-center mb-3">Açık İlanlar</div>
                                </div>
                                <div class="panel-body-left2">
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="../../assets/images/build.jpg" alt="Contact"/></a>
                                        </div>
                                        <div class="media-body pt-sm">
                                            <div class="text-bold">Floyd Ortiz
                                                <div class="text-sm text-muted">12m ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Contact"/></a>
                                        </div>
                                        <div class="media-body pt-sm">
                                            <div class="text-bold">Luis Vasquez
                                                <div class="text-sm text-muted">2h ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Contact"/></a>
                                        </div>
                                        <div class="media-body pt-sm">
                                            <div class="text-bold">Duane Mckinney
                                                <div class="text-sm text-muted">yesterday</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left media-middle">
                                            <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Contact"/></a>
                                        </div>
                                        <div class="media-body pt-sm">
                                            <div class="text-bold">Connie Lambert
                                                <div class="text-sm text-muted">2 weeks ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div class="col-md-8">
                            <div class="panel panel-default">
                                <div class="panel-body-right">
                                    
                                    <div class="h4 text-center fb">Firma Bilgileri</div>
                                    <div class="row pv-lg">
                                        <div class="container">
                                            <form class="form-horizontal ng-pristine ng-valid col-sm-10 m-auto">
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact1">Firma Adı*</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact1" type="text" placeholder="Firma Adı Giriniz"/>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact4">Faliyet Alanı*</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact4" type="text" defaultValue="" placeholder="Faliyet Alanı Giriniz"/>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact5">Web Adresi*</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact5" type="text" placeholder="Web Adresi Giriniz"/>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact6">Çalışan Sayısı</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact5" type="number" placeholder="Çalışan Sayısı Giriniz"/>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact7">Adres</label>
                                                    <div class="col-sm-8">
                                                        <textarea class="form-control" id="inputContact7" type="Adres" row="4" placeholder="Firma Adı Giriniz"></textarea>

                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact8">Özet Bilgi</label>
                                                    <div class="col-sm-8">
                                                        <textarea class="form-control" id="inputContact8" row="4" placeholder="Firma Adı Giriniz"></textarea>

                                                    </div>
                                                </div>
                                                <hr color="#6a6f8c"/>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact2">E-Mail*</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact2" type="email" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact3">Şifre*</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact3" type="text" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-4 control-label" for="inputContact33">Şifre Tekrarı*</label>
                                                    <div class="col-sm-8">
                                                        <input class="form-control" id="inputContact33" type="text" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-offset-2 col-sm-10">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" class="agree"/><span>Güncellenen bilgileriniz, doğruluğu kontrol edildiğinde sistem personellerimiz tarafından güncellenecektir. Okudum ve Onaylıyorum.</span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10 col-md-6 btn-update">
                                                        <button class="btn btn-success w-100 " type="submit">Güncelle</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
