import './Footer.css'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const FooterComponent = () => {
    return (
        <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block footer-color'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://github.com/CibranMC' className='me-4 text-reset'><img id="img-footer" src="/images/github.png" alt="github"></img>
                        <MDBIcon color='white' fab icon='facebook-f' />
                    </a>
                    <a href='' className='me-4 text-reset'><img id="img-footer" src="/images/Instagram.png" alt="Instagram"></img>
                        <MDBIcon color='white' fab icon='twitter' />
                    </a>
                    <a href='https://www.linkedin.com/in/cibr%C3%A1n-mel%C3%A9ndez-cabo/' className='me-4 text-reset'><img id="img-footer" src="/images/linkedin.png" alt="linkedin"></img>
                        <MDBIcon color='white' fab icon='google' />
                    </a>
                    <a href='https://www.linkedin.com/in/daniel-v%C3%A1zquez-gonz%C3%A1lez-1b9196183/' className='me-4 text-reset'><img id="img-footer" src="/images/linkedin.png" alt="linkedin"></img>
                        <MDBIcon color='white' fab icon='instagram' />
                    </a>
                    <a href='' className='me-4 text-reset'><img id="img-footer" src="/images/Instagram.png" alt="Instagram"></img>
                        <MDBIcon color='white' fab icon='linkedin' />
                    </a>
                    <a href='https://github.com/DaniVazquezG' className='me-4 text-reset'><img id="img-footer" src="/images/github.png" alt="github"></img>
                        <MDBIcon color='white' fab icon='github' />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white text-white'>
                                Company name
                            </h6>
                            <p className="footer-color">
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Laravel
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
                            <p className='me-2 footer-color'>
                                <MDBIcon icon='home' className='me-2 footer-color' />
                                New York, NY 10012, US
                            </p>
                            <p className='me-3 footer-color'>
                                <MDBIcon icon='envelope' className='me-3 footer-color' />
                                info@example.com
                            </p>
                            <p className='me-3 footer-color'>
                                <MDBIcon icon='phone' className='me-3 footer-color' /> + 01 234 567 88
                            </p>
                            <p className='me-3 footer-color'>
                                <MDBIcon icon='print' className='me-3 footer-color' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 footer-color' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold footer-color' href='https://mdbootstrap.com/'>
                    Los incredíbles Vani Dázquez y Mibrán Celéndez
                </a>
            </div>
        </MDBFooter>
    );
}

export default FooterComponent