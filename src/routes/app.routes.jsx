import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ArtistsList from '../pages/ArtistsPage';
import ArtworksList from '../pages/ArtworksPage';
import ArtistCreate from '../pages/ArtistCreatePage';
import ArtworkCreate from '../pages/ArtworkCreatePage';
import ArtistDetail from '../pages/ArtistsDetailsPage';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/artists' element={<ArtistsList />} />
            <Route path='/artworks' element={<ArtworksList />} />
            <Route path='/create-artist' element={<ArtistCreate />} />
            {/* <Route path='/create-artwork' element={<ArtworkCreate />} /> */}
            <Route path='/artists/:id' element={<ArtistDetail />} />
        </Routes>

    )
}

export default AppRoutes