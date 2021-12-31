import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFile, faFileCode } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">Our services</h1>
            <div className="container">
                <div className="row">


                    {/* google seo xidmetleri */}

                    <div className='serv-container col-lg-3 col-md-6 col-sm-6'>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <FontAwesomeIcon icon={faGoogle} className='serv-icon mb-2'></FontAwesomeIcon>
                                    <h3>SEO</h3>
                                </div>
                            </div>
                            <div className="face face-1">
                                <div className='transparent'></div>
                                <div className="content">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum</p>
                                    <a className='serv-button' href="#" type="button"><h5>Read More</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="serv-container col-lg-3 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <FontAwesomeIcon icon={faFileCode} className='serv-icon mb-2'></FontAwesomeIcon>
                                    <h3>WEB</h3>
                                </div>
                            </div>
                            <div className="face face-2">
                                <div className="content">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum</p>
                                    <a className='serv-button' href="#" type="button"><h5>Read More</h5></a>
                                </div>
                                <div className='transparent'></div>
                            </div>
                        </div>
                    </div>

                    <div className="serv-container col-lg-3 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <FontAwesomeIcon icon={faFacebookF} className='serv-icon mb-2'></FontAwesomeIcon>
                                    <h3>Fcebook SMM</h3>
                                </div>
                            </div>
                            <div className="face face-3">
                                <div className='transparent'></div>
                                <div className="content">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum </p>
                                    <a className='serv-button' href="#" type="button"><h5>Read More</h5></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="serv-container col-lg-3 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <FontAwesomeIcon icon={faDesktop} className='serv-icon mb-2'></FontAwesomeIcon>
                                    <h3>IT Helpdesk</h3>
                                </div>
                            </div>
                            <div className="face face-4">
                                <div className='transparent'></div>
                                <div className="content">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum</p>
                                    <a className='serv-button' href="#" type="button"><h5>Read More</h5></a>
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* Services üçün birneçə fərqli dizayn yoxlamışam silməyə heyfim gəldiyi üçün silmədim kommentariyaya aldım */}










                    {/* 
                    <div class="maincontainer col-lg-3 col-md-6 col-sm-6">
                        <div class="inner-card">
                            <div class="front-1">
                                <div className='transparent'></div>

                                <div className='icon-circle mt-4'>
                                    <FontAwesomeIcon icon={faFileCode} className='serv-icon'></FontAwesomeIcon>
                                </div>
                                <div className='title'>
                                
                                </div>
                                
                            </div>
                            <div class="theback-1">
                                
                            </div>
                        </div>
                    </div> */}

                    {/* veb development ile elaqeli sahe */}

                    {/* <div class="maincontainer col-lg-3 col-md-6 col-sm-6">
                            <div class="inner-card">
                                <div class="front-2">
                                    <div className='transparent'></div>
                                    <div className='icon-circle mt-4'>
                                        <FontAwesomeIcon icon={faDesktop} className='serv-icon'></FontAwesomeIcon>
                                    </div>
                                </div>
                                <div class="theback-2"></div>
                            </div>
                        </div> */}



                    {/* Facebook Marketing SMM*/}

                    {/* <div class="maincontainer col-lg-3 col-md-6 col-sm-6">
                            <div class="inner-card">
                                <div class="front-3">
                                    <div className='transparent'></div>
                                    <div className='icon-circle mt-4'>
                                        <FontAwesomeIcon icon={faGoogle} className='serv-icon'></FontAwesomeIcon>
                                    </div>
                                </div>
                                <div class="theback-3"></div>
                            </div>
                        </div> */}



                    {/* IT  */}
                    {/* 
                        <div class="maincontainer col-lg-3 col-md-6 col-sm-6">
                            <div class="inner-card">
                                <div class="front-4">
                                    <div className='transparent'></div>
                                    <div className='icon-circle mt-4'>
                                        <FontAwesomeIcon icon={faFacebookF} className='serv-icon'></FontAwesomeIcon>
                                    </div>
                                </div>
                                <div class="theback-4"></div>
                            </div>
                        </div> */}








                </div>
            </div>
        </div>
    )
}

export default Services
