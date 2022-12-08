import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AuthAPI from '../../services/auth.service';

const Register = () => {
    const [newUser, setNewUser] = useState({})

    const onChangeNewUser = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const createNewUser = (event) => {
        event.preventDefault();
        AuthAPI.registerUser(newUser).then((res) => {
            console.log(res);
        });
    };

    return (
        <div style={{ margin: '60px' }}>
            <Form onSubmit={createNewUser}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={onChangeNewUser}
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={newUser.email}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Contraseña'
                        onChange={onChangeNewUser}
                        name='password'
                        value={newUser.password}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Register
                </Button>
            </Form>
        </div>
    );

}



export default Register;