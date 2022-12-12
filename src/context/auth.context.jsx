import { createContext, useEffect, useState } from 'react';
import UserAPI from '../services/user.service';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const LOCAL_STORAGE_AUTH = 'tokenAuth';

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [gallerist, setGallerist] = useState()
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const storeSetToken = (token) => {
        localStorage.setItem(LOCAL_STORAGE_AUTH, token);
    };

    const destroyToken = () => {
        localStorage.removeItem(LOCAL_STORAGE_AUTH);
    }

    const authentication = () => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH);

        if (token) {
            UserAPI
                .me(token)
                .then((user) => {
                    setUser(user);
                    setIsLoggedIn(true)
                })
                .catch((err) => {
                    console.error(err); setIsLoggedIn(false)

                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            setUser(null);
            // navigate('/auth/register');
        }
    };

    const logOut = () => {
        destroyToken();
        authentication();
    }

    useEffect(() => {
        authentication();
    }, [])

    return (
        <AuthContext.Provider
            value={{ authentication, storeSetToken, isLoading, setIsLoading, isLoggedIn, logOut, user }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};
