
import Header from './components/Header';
import './index.css';
import Forest from './pages/Forest';
import Garden from './pages/Garden';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Workshop from './pages/Workshop';
import Barn from './pages/Barn';
import GytrashProfile from './pages/GytrashProfile';
import Error404 from './pages/Error404';
import Connexion from './pages/Connexion';
import Error401 from './pages/Error401';

function App() {

  return (
    
    <BrowserRouter>
    <Header>
        <Routes>
          <Route path='/garden' element={<Garden/>} />
          <Route path='/forest' element={<Forest/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/' element={<Connexion/>} />
          <Route path='/workshop' element={<Workshop/>} />
          <Route path='/barn' element={<Barn/>} />
          <Route path='/gytrash/:id' element={<GytrashProfile/>} />
          <Route path='/404' element={<Error404/>} />
          <Route path='/401' element={<Error401/>} />
          <Route path='/*' element={<Error404/>} />
        </Routes>
    </Header>
    </BrowserRouter>
    


  );
}

export default App;
