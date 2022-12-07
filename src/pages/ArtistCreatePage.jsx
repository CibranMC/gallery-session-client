import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ArtistAPI from '../services/artists.service'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'

const ArtistCreate = () => {
    const navigate = useNavigate();
    const [artist, setArtist] = useState({});



    const createNewArtist = (event) => {
        event.preventDefault()
        ArtistAPI.createArtist(artist)
            .then(() => {
                console.log(artist)
                navigate('/artists');
            })
    }

    const updateNewArtist = (event) => {
        const { name, value } = event.target
        setArtist({ ...artist, [name]: value })
    }

    return (
        <>
            <div style={{ marginTop: '60px' }}></div>
            <h1>CREATE</h1>
            <Form onSubmit={createNewArtist}>
                <Container>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                onChange={updateNewArtist}
                                type="text"
                                name="name"

                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik102"
                            className="position-relative"
                        >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                onChange={updateNewArtist}
                                type="text"
                                name="lastName"
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            onChange={updateNewArtist}
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            name="username"

                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        </Form.Control.Feedback>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={updateNewArtist}
                                type="textarea"
                                placeholder="Description"
                                name="description"
                            />
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik104"
                            className="position-relative"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={updateNewArtist}
                                type="text"
                                placeholder="Email"
                                name="email"

                            />
                            <Form.Control.Feedback type="invalid" tooltip>

                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik105"
                            className="position-relative"
                        >
                        </Form.Group>
                    </Row>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                            onChange={updateNewArtist}
                            type="file"
                            name="file"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Add Artist</Button>
                </Container>
            </Form>
        </>

    )
}



export default ArtistCreate;