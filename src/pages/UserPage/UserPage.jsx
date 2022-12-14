import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

const UserPage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div style={{ margin: '60px' }}>
            <h1>{user.email}</h1>

        </div>
    );
};

export default UserPage;