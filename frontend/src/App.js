
import Header from './components/Header';
import './index.css';
import Forest from './pages/Forest';
import Garden from './pages/Garden';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Workshop from './pages/Workshop';
import Barn from './pages/Barn';
import GytrashProfile from './pages/GytrashProfile';
import Error404 from './pages/Error404';
import Connexion from './pages/Connexion';
import Error401 from './pages/Error401';
import { createContext, useEffect, useState } from 'react';


export const LoginContext = createContext();

function App() {

  useEffect(() => {
    setInterval(() => {
      if (localStorage.refresh) {
        fetch('http://127.0.0.1:8000/api/token/refresh/', {

          method : 'POST',
          headers : {
            'Content-Type': 'application/json'
          },
          body : JSON.stringify({
            refresh : localStorage.refresh
          })

        })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          localStorage.access = data.access;
          localStorage.refresh = data.refresh
        })
      }
    }, 1000*60*14)
  }, [])
  
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/garden' element={<Garden />} />
            <Route path='/forest' element={<Forest />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<Connexion />} />
            <Route path='/workshop' element={<Workshop />} />
            <Route path='/barn' element={<Barn />} />
            <Route path='/gytrash/:id' element={<GytrashProfile />} />
            <Route path='/404' element={<Error404 />} />
            <Route path='/401' element={<Error401 />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>


  );
}

export default App;
