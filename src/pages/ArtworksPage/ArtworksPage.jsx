import './ArtworksPage.css'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArtWorksAPI from '../../services/artworks.service'
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

                                    <Link to={`/artworks/${artwork._id}`}><img className="artworks-img" src={artwork.imageArtworkUrl} alt={artwork.name} />
                                        <p>{artwork.name}</p></Link>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div >
    )
}

export default ArtworksList