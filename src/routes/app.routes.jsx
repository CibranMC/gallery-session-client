import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react';
import HomePage from '../pages/HomePage';
import ArtistsList from '../pages/ArtistsPage';
import ArtworksList from '../pages/ArtworksPage';
import ArtistCreate from '../pages/ArtistCreatePage';
import ArtworkCreate from '../pages/ArtworkCreatePage';
import ArtistDetail from '../pages/ArtistsDetailsPage';
import ArtworkDetail from '../pages/ArtworksDetailsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LogInPage';
import UserPage from '../pages/UserPage';

import { AuthContext } from '../context/auth.context';

const AppRoutes = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/me' element={<UserPage />} />
            <Route path='/auth/register' element={<RegisterPage />} />
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/artists' element={<ArtistsList />} />
            <Route path='/artworks' element={<ArtworksList />} />
            <Route path='/create-artist' element={<ArtistCreate />} />
            <Route path='/create-artwork' element={<ArtworkCreate />} />
            <Route path='/artists/:id' element={<ArtistDetail />} />
            <Route path='/artworks/:id' element={<ArtworkDetail />} />
        </Routes>

    )
}

export default AppRoutes