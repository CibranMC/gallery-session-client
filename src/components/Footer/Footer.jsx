import './Footer.css'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const FooterComponent = () => {
    return (

        <MDBFooter id="footer" name="footer" bgColor='black' className='text-center text-lg-start text-muted footer'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block footer-color'>
                    <span>Nuestras redes:</span>
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
                                Gallería
                            </h6>
                            <p className="footer-color">

                                La galería Espacio Negativo fue fundada hace un par de semanas por dos historiadores del arte en paro. Recive su nombre del término Japonés conocido como Ma(間), o espacio vacío. Descrito como una pausa en el tiempo, un intervalo o salto en el espacio, este término es usado tanto en las artes como en la vida para resaltar la importancia de la pausa y los espacios vacíos.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Productos</h6>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Venta de Arte
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Art consulting
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Catalogación
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset footer-color'>
                                    Tasación
                                </a>
                            </p>
                        </MDBCol>


                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Contacto</h6>
                            <p className='me-2 footer-color'>
                                <MDBIcon icon='home' className='me-2 footer-color' />
                                Santiago de Compostela /
                                Vigo

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
                    Daniel Vázquez González y Cibrán Meléndez Cabo
                </a>
            </div>
        </MDBFooter>

    );
}

export default FooterComponent