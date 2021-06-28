import React from 'react'
import BottomSection from '../default/BottomSection'
import Footer from '../default/Footer'
import Navi from '../default/Navi'
import SearchArea from '../default/SerachArea'

export default function JobPostingDetailDashboard() {
    return (
        <div>
            <Navi />
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

                                            <JobPostingList />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <BottomSection />
            <Footer />
        </div>
    )
}
