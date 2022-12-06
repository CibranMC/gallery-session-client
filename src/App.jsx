import './App.css';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import NavBarComponent from './components/Navbar/Navbar'
import ArtistsList from './pages/ArtistsPage';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/artists' element={<ArtistsList />} />
      </Routes>
    </div>
  );
}

export default App;
