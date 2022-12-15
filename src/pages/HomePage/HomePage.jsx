import './HomePage.css';
import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';


const HomePage = () => {
    return (
        <div className='home-page'>
            <div>
                <section className="section-one">
                    <MDBCarousel className='carousel' showControls fade>
                        <MDBCarouselItem
                            className='d-block w-100'
                            id='carousel-img'
                            itemId={1}
                            src='/images/lauramesa.png'
                            alt='hopper'
                        />
                        <MDBCarouselItem
                            className='d-block w-100'
                            id='carousel-img'
                            itemId={2}
                            src='/images/jacobbrustrop.jpg'
                            alt='jacobbrostrup'
                        />
                        <MDBCarouselItem
                            className='d-block w-100'
                            id='carousel-img'
                            itemId={3}
                            src='/images/danielhopper.jpg'
                            alt='lauram'
                        />
                    </MDBCarousel>
                </section>
            </div>
            <div>
                <section className='section-two'>

                    <h4 className='title'>Laura Mesa</h4>
                    <h5 className='focus'>Artista destacada</h5>
                    <div className="week-artist">
                        <p className='lauraimg' ><img src="/images/lauramesabody.jpeg" alt="lauramesa" /></p>
                        <article className='article'>

                            <p>Licenciada en Bellas Artes con doble especialidad, pintura y escultura, en 1998. Doctora Cum Laude en Bellas Artes por la especialidad de Dibujo en 2008 y graduada en Filosofía en 2018.

                                Tras 20 años de experiencia como profesora de Dibujo Artístico en las Escuelas de Arte y Superior de Diseño actualmente soy docente en  la Facultad de Bellas Artes de la ULL.

                                Paralelamente he desarrollado una investigación artística que cuenta con 19 exposiciones colectivas –en distintos espacios de Tenerife, Gran Canaria y Madrid– y 6 exposiciones individuales.</p>
                        </article>
                    </div>

                </section>
            </div>

        </div >
    )
}


export default HomePage;