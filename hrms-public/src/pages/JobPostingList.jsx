import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, } from "react-icons/fa";
import JobPostingService from "../services/jobPostingService";
import { Link } from 'react-router-dom';

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getVisibleJobPosting().then(result => setJobPostings(result.data.data))
    }, [])

    return (
        <div>

            <div class="center rounded">
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
                                        <th class="userlist3" ><span>İstihdam</span></th>
                                        <th class="userlist4" ><span>Pozisyon </span></th>
                                        <th class="userlist5" ><span>Şehir</span></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        jobPostings.map(jobPosting => (
                                            <tr key={jobPosting.id}>
                                                <td>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                        alt="avatar1" />
                                                    <a href="/#" class="user-link">
                                                        {/*   
                                                        <Link to={'/jobpostings/${jobPosting.id}'}>
                                                        {jobPosting.description}
                                                        </Link>
                                                        */}
                                                        <Link to={`/jobpostings/${jobPosting.id}`} >{jobPosting.description}</Link>
                                                    </a>
                                                    <span class="user-subhead">{jobPosting.employer.companyName}</span>
                                                </td>
                                                <td>

                                                    {jobPosting.endedDate}

                                                </td>
                                                <td class="text-center">

                                                    {/*if(jobPosting.visible){
                                                        deneme
                                                    }*/}

                                                    {/*jobPosting.visible*/}
                                                    {jobPosting.openPosition}
                                                    {/* <span class="label label-default">Aktif</span> */}
                                                </td>
                                                <td>

                                                    {jobPosting.jobTitle.title}

                                                </td>
                                                <td class="td_city">
                                                    <span class="fa-stack">
                                                        {/* <i class="fa fa-square fa-stack-2x"></i>
                                          <i
                                            class="fa fa-map-marked-alt fa-stack-1x fa-inverse"></i> */}
                                                        <FaMapMarkedAlt size="1.5em" />

                                                    </span>
                                                    {jobPosting.city.cityName}

                                                </td>
                                            </tr>

                                        ))
                                    }
                                    <tr>
                                        <td>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                alt="avatar2" />
                                            <a href="/#" class="user-link">Geliştirici
                                                Aranıyoruz</a>
                                            <span class="user-subhead">Logo Yazılım</span>
                                        </td>
                                        <td>
                                            2014/04/28
                                        </td>
                                        <td class="text-center">
                                            <span class="label label-default">6</span>
                                        </td>
                                        <td>
                                            C# Developer
                                        </td>
                                        <td class="td_city">
                                            <span class="fa-stack">

                                                {/* <i class="fa fa-square fa-stack-2x"></i>
                                          <i
                                            class="fa fa-map-marked-alt fa-stack-1x fa-inverse"></i> */}
                                                <FaMapMarkedAlt size="1.5em" />
                                            </span>
                                            İstanbul

                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                alt="avatar3" />
                                            <a href="/#" class="user-link">Geliştirici
                                                Aranıyoruz</a>
                                            <span class="user-subhead">Logo Yazılım</span>
                                        </td>
                                        <td>
                                            2012/12/01
                                        </td>
                                        <td class="text-center">
                                            <span class="label label-default">4</span>
                                        </td>
                                        <td>
                                            Frontend Developer
                                        </td>
                                        <td class="td_city">
                                            <span class="fa-stack">

                                                {/* <i class="fa fa-square fa-stack-2x"></i>
                                          <i
                                            class="fa fa-map-marked-alt fa-stack-1x fa-inverse"></i> */}
                                                <FaMapMarkedAlt size="1.5em" />
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
    )
}