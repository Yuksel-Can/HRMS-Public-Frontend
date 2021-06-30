import React from 'react'

import SearchArea from '../default/SerachArea';
import Sidebar from './Sidebar';
import BottomSection from '../default/BottomSection';
import JobPostingList from '../../pages/JobPostingList';
import { Route } from 'react-router-dom';

export default function MainContext() {
    return (
        <div>


            <SearchArea />

            <div class="prising_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section_title text-center mb-100">
                                <div class="container-xxl">
                                    <div class="row">
                                        <div class="col-lg-3 d-none d-lg-block">

                                            <Sidebar />

                                        </div>

                                        <div class="col-lg-9">

                                            <Route exact path="/" component={JobPostingList} />
                                            <Route exact path="/jobpostinglist" component={JobPostingList} />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomSection />
        </div>
    )
}
