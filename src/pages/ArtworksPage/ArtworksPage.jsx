import './ArtworksPage.css'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Pagination } from 'react-bootstrap'
import ArtWorksAPI from '../../services/artworks.service'
import { Link } from 'react-router-dom'

const ArtworksList = () => {
    const [artworks, setArtworks] = useState([])
    const [pagination, setPagination] = useState(0)
    const [maxPage, setMaxPage] = useState(0)

    const reloadArtworks = (pagination) => {
        ArtWorksAPI.getAllArtworks(pagination).then((artworks) => {
            console.log(artworks)
            setArtworks(artworks.results)
            setMaxPage(artworks.maxPage)
        })
    }

    useEffect(() => {
        reloadArtworks(pagination)
    }, [pagination])

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
                                        <p>{artwork.name}</p>

                                    </Link>

                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Pagination>
                        <Pagination.First as='span' onClick={() => setPagination(0)} />
                        <Pagination.Prev
                            as='span'
                            onClick={() =>
                                setPagination((lastPagination) => lastPagination - 1)
                            }
                        />
                        <Pagination.Next
                            as='span'
                            onClick={() =>
                                setPagination((lastPagination) => lastPagination + 1)
                            }
                        />
                        <Pagination.Last as='span' onClick={() => setPagination(maxPage)} />
                    </Pagination>
                </Row>
            </Container>
        </div >
    )
}

export default ArtworksList