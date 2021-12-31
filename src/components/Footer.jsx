import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF, faInstagram, faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faEnvelope, faFax, faFileCode, faHome, faHouseUser, faLocationArrow, faMailBulk, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<div className='my-3'>
			<footer className='footer text-white'>
				{/* up */}
				<section className='section d-flex justify-content-between p-5'>
					<div className='content me-5 d-flex align-items-center'>
						<span>Lorem ipsum dolor,  adipisicing elit. Eum sit laborum dolorem.</span>
					</div>
					<div className='links d-flex justify-content-around col-lg-2 col-xs-'>
						<a className='circle'><FontAwesomeIcon icon={faFacebookF} className='icon text-white'></FontAwesomeIcon></a>
						<a className='circle'><FontAwesomeIcon icon={faInstagram} className='icon text-white'></FontAwesomeIcon></a>
						<a className='circle'><FontAwesomeIcon icon={faTwitter} className='icon text-white'></FontAwesomeIcon></a>
						<a className='circle'><FontAwesomeIcon icon={faGoogle} className='icon text-white'></FontAwesomeIcon></a>
						<a className='circle'><FontAwesomeIcon icon={faDiscord} className='icon text-white'></FontAwesomeIcon></a>
						<a className='circle'><FontAwesomeIcon icon={faGithub} className='icon text-white'></FontAwesomeIcon></a>
					</div>
				</section>
				{/* down */}

				<div className='main col-lg- col-xm-12 text-lg-start text-center'>
					<div className='container text-md-start'>
						<div className='row'>
							{/* grid column */}
							<div className='footer-col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5'>
								<h4 className='header text-uppercase fw-bold text-white'>company</h4>
								<hr class='mb-4 mt-0 d-inline-block mx-auto'></hr>
								<p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eveniet tempora incidunt explicabo temporibus distinctio! Fuga quos eligendi minus vitae.</p>
							</div>
							{/* grid column */}

							<div className='footer-col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5'>
								<h4 className='header text-uppercase fw-bold text-white'>Products</h4>
								<hr class='mb-4 mt-0 d-inline-block mx-auto'></hr>
								<p>
									<a href="#!" class="text-white">Lorem</a>
								</p>
								<p>
									<a href="#!" class="text-white">Lorem</a>
								</p>
								<p>
									<a href="#!" class="text-white">Lorem</a>
								</p>
								<p>
									<a href="#!" class="text-white">Lorem</a>
								</p>

							</div>
							{/* grid column */}

							<div className='footer-col col-md-3 col-lg-4 col-xl-3  mb-4 mt-5'>
								<h4 className='header text-uppercase fw-bold text-white'>Lorem</h4>
								<hr class='mb-4 mt-0 d-inline-block mx-auto'></hr>
								<p>
									<a href="#!" class="text-white">Lorem</a>
								</p>
								<p>
									<a href="#!" class="text-white">lorem</a>
								</p>
								<p>
									<a href="#!" class="text-white">Lorem.</a>
								</p>
								<p>
									<a href="#!" class="text-white">Lorem.</a>
								</p>

							</div>
							{/* grid column */}

							<div className='footer-col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5'>
								<h4 className='ftr text-uppercase fw-bold text-white'>Contact</h4>
								<hr class='mb-4 mt-0 d-inline-block mx-auto'></hr>
								<p><FontAwesomeIcon icon={faHome} className='icon text-white'></FontAwesomeIcon><span className='contact-text ml-1 text-white'>Baku, Mərdəkan</span></p>
								<p><FontAwesomeIcon icon={faEnvelope} className='icon text-white'></FontAwesomeIcon><span className='contact-text ml-1 text-white'>info@farkhadaskerov.com</span></p>
								<p><FontAwesomeIcon icon={faPhone} className='icon text-white'></FontAwesomeIcon><span className='contact-text ml-1 text-white'>+994 50 568 79 69</span></p>
								<p><FontAwesomeIcon icon={faPrint} className='icon text-white'></FontAwesomeIcon><span className='contact-text ml-1 text-white'>Lorem, ipsum.</span></p>



							</div>
							{/* grid column */}

						</div>
					</div>

				</div>

				<div className='copyright p-3 text-center'>
					<p className='col-cpr'>
						&copy;{new Date().getFullYear()} FARKHAD ASKEROV INC | ALL right resevered
					</p>
					 
				</div>



			</footer>


		</div>
	)
}

export default Footer
