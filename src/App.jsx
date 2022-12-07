import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar/Navbar'
import AppRoutes from './routes/app.routes';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <AppRoutes />
    </div>
  );
}

export default App;
