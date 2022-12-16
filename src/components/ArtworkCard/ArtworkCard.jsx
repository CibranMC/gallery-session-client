import './ArtworkCard.css'
import { Container, Row, Col } from "react-bootstrap"


const ArtworkCard = ({ artwork }) => {

    return (
        <>

            <Container>
                <Row>
                    <Col className='col-text'>
                        <h2>{artwork.name}</h2>
                        <hr class="solid"></hr>
                        <h5>{artwork.artistName}</h5>
                        <p>{artwork.description}</p>
                        <p>{artwork.year}</p>
                        <p>{artwork.technique}</p>
                        <p>{artwork.price}</p>
                    </Col>

                    <Col><p className='col-img'><img className="artworkcard-img" src={artwork.imageArtworkUrl} alt={artwork.name} /></p></Col>


                </Row>

            </Container>
        </>
    )

}

export default ArtworkCard