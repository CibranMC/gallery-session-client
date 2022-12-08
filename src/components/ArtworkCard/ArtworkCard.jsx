import { Button, Card } from "react-bootstrap"


const ArtworkCard = ({ artwork }) => {

    return (
        <>
            <Card className="my-2"
                color="dark"
                style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Img
                        src={artwork.imageArtworkUrl}
                        alt={artwork.name} />
                    <Card.Title>{artwork.name}</Card.Title>
                    <Card.Text>{artwork.artistName}</Card.Text>
                    <Card.Text>
                        {artwork.description}
                    </Card.Text>
                    <Card.Text>{artwork.year}</Card.Text>
                    <Card.Text>{artwork.technique}</Card.Text>
                    <Card.Text>{artwork.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ArtworkCard