import './ArtistsPage.css'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Pagination } from 'react-bootstrap'
import ArtistAPI from '../../services/artists.service'
import { Link } from 'react-router-dom'


const ArtistsList = () => {
    const [artists, setArtists] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [pagination, setPagination] = useState(0)
    const [maxPage, setMaxPage] = useState(0)

    const reloadArtists = (pagination) => {
        ArtistAPI.getAllArtists(pagination).then((artists) => {
            setArtists(artists.results)
            setMaxPage(artists.maxPage)
        })
    }

    //searchBar
    // useEffect(() => {
    //     ArtistAPI
    //         .getAllArtists().then(json => {
    //             setArtists(json)
    //             return json
    //         })
    //         .then(json => {
    //             setSearchResults(json)
    //         })
    // }, [])

    // const results = setSearchResults.map(artist => <ArtistCard key={artist.id} artist={artist} />)

    useEffect(() => {
        reloadArtists(pagination)
    }, [pagination])


    useEffect(() => {
        ArtistAPI.getAllArtists().then((artists) => {
            console.log(artists)
            setArtists(artists.results)
        })
    }, [])


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
        </div>
    )
}

export default ArtistsList

