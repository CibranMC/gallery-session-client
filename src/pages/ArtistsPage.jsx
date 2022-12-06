import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ArtistAPI from '../services/artists.service'

const ArtistsList = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        ArtistAPI.getAllArtists().then((artists) => {

            setArtists(artists.results)
        })
    }, [])
    // const [pagination, setPagination] = useState(0)
    // const [maxPage, setMaxPage] = useState(0)
    return (
        <div className='Artists-list'>
            <Container>
                <Row xs={3} className='g-4'>
                    {
                        artists.map((artist) => {
                            return (
                                <Col key={artist._id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{artist.name} {artist.lastName}</Card.Title>
                                            <Card.Text>{artist.description}</Card.Text>
                                        </Card.Body>
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

export default ArtistsList

