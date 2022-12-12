import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react';
import HomePage from './../pages/HomePage/HomePage';
import ArtistsList from './../pages/ArtistsPage/ArtistsPage';
import IsPrivate from './isPrivate'
import ArtworksList from './../pages/ArtworksPage/ArtworksPage';
import ArtistCreate from './../pages/ArtistCreatePage/ArtistCreatePage';
import ArtworkCreate from './../pages/ArtworkCreatePage/ArtworkCreatePage';
import ArtistDetail from './../pages/ArtistDetailsPage/ArtistsDetailsPage';
import ArtworkDetail from './../pages/ArtworksDetailsPage/ArtworksDetailsPage';
import RegisterPage from './../pages/RegisterPage/RegisterPage';
import LoginPage from './../pages/LogInPage/LogInPage';
import UserPage from './../pages/UserPage/UserPage';
import ShopPage from './../pages/ShopPage/ShopPage';

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
            <Route path='/create-artist' element={<IsPrivate><ArtistCreate /></IsPrivate>} />
            <Route path='/create-artwork' element={<ArtworkCreate />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/artists/:id' element={<ArtistDetail />} />
            <Route path='/artworks/:id' element={<ArtworkDetail />} />
        </Routes>

    )
}

export default AppRoutes