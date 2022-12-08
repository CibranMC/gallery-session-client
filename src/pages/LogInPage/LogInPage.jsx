import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AuthAPI from '../../services/auth.service';
import { AuthContext } from '../../context/auth.context';

const LoginPage = () => {
    const [user, setUser] = useState({});
    const { storeSetToken, authentication } = useContext(AuthContext);

    const onChangeUser = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const LoginUser = (event) => {
        event.preventDefault();
        AuthAPI.loginUser(user).then((res) => {
            console.log(res.token);
            storeSetToken(res.token);
            authentication();
        });
    };

    return (
        <div style={{ margin: '60px' }}>
            <Form onSubmit={LoginUser}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={onChangeUser}
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={user.email}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Contraseña'
                        onChange={onChangeUser}
                        name='password'
                        value={user.password}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginPage;
