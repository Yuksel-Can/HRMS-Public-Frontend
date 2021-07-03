import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobPostingDetailRight from '../../pages/JobPostingDetailRight'
import JobPostingList from '../../pages/JobPostingList'
import JobPostingService from '../../services/jobPostingService'
import BottomSection from '../default/BottomSection'
import Footer from '../default/Footer'
import Navi from '../default/Navi'
import SearchArea from '../default/SerachArea'
import Sidebar from '../main/Sidebar'
import JobPostingDetailLeft from './JobPostingDetailLeft'
export default function JobPostingDetailDashboard() {

    return (

        <div>
            

            <div className="mt-100">
                <div class="prising_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="section_title text-center mb-100">
                                    <div class="container-xxl">
                                        <div class="row">
                                            {/*jobPosting.employer?.webAddress*/}
                                            <div class="col-lg-3 d-none d-lg-block">

                                                <JobPostingDetailLeft />

                                            </div>

                                            <div class="col-lg-9">

                                                <JobPostingDetailRight />

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
    )
}
