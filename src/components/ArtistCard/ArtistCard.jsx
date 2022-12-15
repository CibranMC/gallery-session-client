import './ArtistCard.css'
import { Container, Row, Col } from "react-bootstrap"


const ArtistCard = ({ artist }) => {

    return (
        <>

            <Container>
                <Row>
                    <Col className='col-text'>
                        <h2>{artist.name}</h2>
                        <h5>{artist.lastName}</h5>
                        <p>{artist.description}</p>
                        <p>{artist.id}</p>


                    </Col>

                    <Col><p className='col-img'><img className="artist-img" src={artist.imageUrl} alt={artist.name} /></p></Col>


                </Row>

            </Container>
        </>
    )
}

export default ArtistCard