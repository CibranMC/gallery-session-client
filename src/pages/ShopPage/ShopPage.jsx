import { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import ArtWorksAPI from '../../services/artworks.service'
import { Link } from 'react-router-dom'

const ShopList = () => {
    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        ArtWorksAPI.getAllArtworks().then((artworks) => {
            console.log(artworks)
            setArtworks(artworks.results)
        })
    }, [])

    return (
        <div className='Artworks-list'>
            <div className='Artworks-list'>
                <Container>
                    <Row>
                        {
                            artworks?.map((artwork) => {
                                return (
                                    <Col xs={3} lg={3} key={artwork._id}>

                                        <img className="artworks-img" src={artwork.imageArtworkUrl} alt={artwork.name} />
                                        <p>{artwork.name} {artwork.price}</p>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div >
        </div>
    )
}

export default ShopList