import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const ArtistCard = ({ artist }) => {
    const { show, setShow } = useState(false)

    const handleShow = () => setShow(true)

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{artist.name} {artist.lastName}</Card.Title>
                    <Card.Text>{artist.userName}</Card.Text>
                    <Card.Text>{artist.description}</Card.Text>
                    <Card.Text>{artist.email}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='link'>
                        <Link to={`/artists/${artist._id}`}>Details</Link>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default ArtistCard