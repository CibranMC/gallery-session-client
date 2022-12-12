import './ArtistsPage.css'
import { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import ArtistAPI from '../../services/artists.service'
import { Link } from 'react-router-dom'
import Searchbar from '../../components/SearchBar/searchbar'

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

                                    <Link to={`/artists/${artist._id}`}><img className="artists-img" src={artist.imageUrl} alt={artist.userName} /></Link>
                                    <p>{artist.name} {artist.lastName}</p>
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

