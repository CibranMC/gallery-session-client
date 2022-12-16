import './ArtistCreatePage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import ArtistAPI from '../../services/artists.service'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'

const ArtistCreate = () => {
    const navigate = useNavigate();
    const [artist, setArtist] = useState({});

    const createNewArtist = (event) => {
        event.preventDefault()
        ArtistAPI.createArtist(artist)
            .then(() => {

                navigate('/artists');
            })
    }

    const updateNewArtist = (event) => {
        const { name, value } = event.target
        setArtist({ ...artist, [name]: value })
    }

    const handleFileUpload = (event) => {
        const { name, value } = event.target
        setArtist({ ...artist, [name]: value })

        const uploadData = new FormData();

        uploadData.append("imageUrl", event.target.files[0]);
        console.log(uploadData.get("imageUrl"))
        ArtistAPI
            .uploadImage(uploadData)
            .then(response => {
                console.log("response is: ", response)
                setArtist({ ...artist, imageUrl: response.fileUrl });
            })
            .catch(err => console.log("Error while uploading the file: ", err));

    };
    return (
        <>
            <div style={{ marginTop: '60px' }}></div>
            <Form onSubmit={createNewArtist}>
                <Container>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                onChange={updateNewArtist}
                                type="text"
                                name="name"
                                placeholder='First Name'

                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik102"
                            className="position-relative"
                        >
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                onChange={updateNewArtist}
                                type="text"
                                name="lastName"
                                placeholder='Last Name'
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label className='usernametext'>Username</Form.Label>
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
                            <Form.Label className='descriptiontext'>Descripción</Form.Label>
                            <Form.Control
                                className='descriptionbox'
                                onChange={updateNewArtist}
                                type="textarea"
                                name="description"
                            />
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
                        <Form.Label className="filetext">Archivo</Form.Label>
                        <Form.Control
                            className='filecss'
                            onChange={handleFileUpload}
                            type="file"
                            name="file"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Añadir Artista</Button>
                </Container>
            </Form>
        </>

    )
}



export default ArtistCreate;


