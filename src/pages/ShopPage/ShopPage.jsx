import { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import ArtWorksAPI from '../services/artworks.service'
import { Link } from 'react-router-dom'

const ArtworksList = () => {
    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        ArtWorksAPI.getAllArtworks().then((artworks) => {
            console.log(artworks)
            setArtworks(artworks.results)
        })
    }, [])

    return (
        <div className='Artworks-list'>
            <Container>
                <Row xs={3} className='g-4'>
                    {
                        artworks?.map((artwork) => {
                            return (
                                <Col key={artwork._id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{artwork.name}</Card.Title>
                                            <Card.Text>{artwork.artistName}</Card.Text>
                                            <Card.Text>{artwork.year}</Card.Text>
                                            <Card.Text>{artwork.technique}</Card.Text>
                                            <Card.Text>{artwork.price}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button><Link to={`/artworks/${artwork._id}`}>Details</Link></Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ArtworksList