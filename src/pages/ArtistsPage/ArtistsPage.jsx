import { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import ArtistAPI from '../../services/artists.service'
import { Link } from 'react-router-dom'

const ArtistsList = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        ArtistAPI.getAllArtists().then((artists) => {
            console.log(artists)
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
                                        <Card.Footer><Button><Link to={`/artists/${artist._id}`}>Details</Link></Button></Card.Footer>
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

