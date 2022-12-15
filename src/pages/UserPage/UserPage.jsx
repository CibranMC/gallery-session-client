import "./UserPage.css"
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Col, Container, Row, Pagination } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ArtworkDetail from '../ArtworksDetailsPage/ArtworksDetailsPage';
import AuthAPI from '../../services/auth.service'




const UserPage = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)

    return (
        <div className="profile-page">
            <Container>
                <Row xs={3} className='g-4'>
                    {
                        user?.cart.map((cart) => {

                            return (
                                <Col key={cart._id}>

                                    <Link ><img className="artworks-img" src={cart.imageArtworkUrl} alt={cart.name} />

                                        <p>{cart.name}</p>

                                    </Link>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>

    );
};

export default UserPage;