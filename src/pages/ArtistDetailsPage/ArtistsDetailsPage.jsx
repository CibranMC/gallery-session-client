import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtistAPI from '../../services/artists.service'
import ArtistCard from '../../components/ArtistCard/ArtistCard'
import { Row, Container } from 'react-bootstrap'



const ArtistDetail = () => {
    const { id } = useParams()
    const [artist, setArtist] = useState(undefined);

    useEffect(() => {
        ArtistAPI.getOneArtistById(id).then((artist) => {
            console.log(artist)
            setArtist(artist);
        })

    }, [])

    return (


        <Container>
            <Row>
                {artist && <ArtistCard artist={artist} />}

            </Row>



        </Container>

    )
}





export default ArtistDetail;