import { createContext, useEffect, useState } from 'react';
import AuthAPI from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const LOCAL_STORAGE_AUTH = 'tokenAuth';

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const storeSetToken = (token) => {
        console.log(token)
        localStorage.setItem(LOCAL_STORAGE_AUTH, token);
    };

    const destroyToken = () => {
        localStorage.removeItem(LOCAL_STORAGE_AUTH);
    }

    // const profile = () => {
    //     if (token) {
    //         AuthAPI
    //             .cartUpdate(body, token)
    //     }
    // }

    const authentication = () => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH);

        if (token) {
            AuthAPI
                .me(token)
                .then((user) => {
                    setUser(user);
                }).then(() => setIsLoggedIn(true))
                .catch((err) => {
                    console.error(err); setIsLoggedIn(false)

                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            setUser(null);
            setIsLoggedIn(false)
            setIsLoading(false)
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
            value={{ authentication, storeSetToken, isLoading, setIsLoading, setIsLoggedIn, isLoggedIn, logOut, user }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};
