import './ArtworkCard.css'
import { Container } from "react-bootstrap"

const ArtworkCard = ({ artwork }) => {

    return (
        <>
            <Container>
                <img className="artworks-img" src={artwork.imageArtworkUrl} alt={artwork.name} />
                <h2>{artwork.name}</h2>
                <h5>{artwork.artistName}</h5>
                <p>{artwork.description}</p>
                <p>{artwork.year}</p>
                <p>{artwork.technique}</p>
                <p>{artwork.price}</p>

            </Container>
        </>
    )
}

export default ArtworkCard