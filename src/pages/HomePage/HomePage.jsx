import './HomePage.css';
import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';


const HomePage = () => {
    return (
        <div className='home-page'>
            <MDBCarousel className='carousel' showControls fade>
                <MDBCarouselItem
                    className='d-block w-100'
                    id='carousel-img'
                    itemId={1}
                    src='https://mdbootstrap.com/img/new/slides/041.jpg'
                    alt='cavolo'
                />
                <MDBCarouselItem
                    className='d-block w-100'
                    id='carousel-img'
                    itemId={2}
                    src='https://mdbootstrap.com/img/new/slides/042.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='d-block w-100'
                    id='carousel-img'
                    itemId={3}
                    src='https://mdbootstrap.com/img/new/slides/043.jpg'
                    alt='...'
                />
            </MDBCarousel>
        </div>
    )
}


export default HomePage;