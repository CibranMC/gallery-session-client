
import { Container } from "react-bootstrap"


const ArtistCard = ({ artist }) => {

    return (
        <>
            <Container>
                <img className="artists-img" src={artist.imageUrl} alt={artist.name} />
                <h2>{artist.name} {artist.lastName}</h2>
                <p>{artist.description}</p>

            </Container>
        </>
    )
}

export default ArtistCard