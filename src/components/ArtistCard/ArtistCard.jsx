
import { Button, Card } from "react-bootstrap"


const ArtistCard = ({ artist }) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{artist.name} {artist.lastName}</Card.Title>
                    <Card.Text>{artist.userName}</Card.Text>
                    <Card.Text>{artist.description}</Card.Text>
                    <Card.Text>{artist.email}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ArtistCard