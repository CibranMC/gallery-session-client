import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar/Navbar'
import AppRoutes from './routes/app.routes';
import FooterComponent from './components/Footer/Footer';



function App() {


  return (
    <div className="App">
      <NavBarComponent />
      <AppRoutes />
      <FooterComponent />
    </div>
  );
}

export default App;
