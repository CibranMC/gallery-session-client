import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ArtworkAPI from '../../services/artworks.service'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'

const ArtworkCreate = () => {
    const navigate = useNavigate();
    const [artwork, setArtwork] = useState({});

    useEffect(() => {
        console.log("Test Use Effect", artwork)
    }, [artwork])

    const createNewArtwork = (event) => {
        event.preventDefault()
        ArtworkAPI.createArtwork(artwork)
            .then(() => {
                navigate('/artworks');
            })
    }

    const updateNewArtwork = (event) => {
        const { name, value } = event.target
        setArtwork({ ...artwork, [name]: value })
    }

    const handleFileUpload = (event) => {
        const { name, value } = event.target

        setArtwork({ ...artwork, [name]: value })

        const uploadData = new FormData();

        uploadData.append("imageArtworkUrl", event.target.files[0]);

        ArtworkAPI
            .uploadImage(uploadData)
            .then(response => {
                console.log("response is: ", response)
                setArtwork({ ...artwork, imageArtworkUrl: response.fileUrl });
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };


    return (
        <>
            <div style={{ marginTop: '60px' }}></div>
            <h1>Crear</h1>
            <Form onSubmit={createNewArtwork}>
                <Container>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Título de la obra</Form.Label>
                            <Form.Control
                                onChange={updateNewArtwork}
                                placeholder="Artwork Title"
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
                            <Form.Label>Nombre artista</Form.Label>
                            <Form.Control
                                onChange={updateNewArtwork}
                                placeholder="Artist name"
                                type="text"
                                name="artistName"
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label>Técnica</Form.Label>
                        <Form.Control
                            onChange={updateNewArtwork}
                            type="text"
                            placeholder="Technique"
                            aria-describedby="inputGroupPrepend"
                            name="technique"

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
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                onChange={updateNewArtwork}
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
                        />
                        <Form.Label>Año</Form.Label>
                        <Form.Control
                            onChange={updateNewArtwork}
                            type="text"
                            placeholder="Year"
                            name="Year"

                        />
                        <Form.Control.Feedback type="invalid" tooltip>

                        </Form.Control.Feedback>

                        <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationFormik104"
                            className="position-relative"
                        >
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                onChange={updateNewArtwork}
                                type="text"
                                placeholder="Price"
                                name="Price"

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
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            onChange={handleFileUpload}
                            type="file"
                            name="file"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Añadir obra</Button>
                </Container>
            </Form>
        </>

    )
}



export default ArtworkCreate;



