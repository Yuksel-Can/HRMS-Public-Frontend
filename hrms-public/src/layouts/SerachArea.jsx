import React from 'react'

export default function SearchArea() {

    return (
        <div>

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

        </div>
    )
}


