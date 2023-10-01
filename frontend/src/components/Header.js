import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../App';
import barrenFieldIcon from '../assets/BarrenFieldIcon.png';
import fieldIcon from '../assets/FieldIcon.png';

function Header(props) {

  const [loggedIn, setLoggedIn] = useContext(LoginContext)
  const navigate = useNavigate()

  function logOut() {
    localStorage.clear();
    setLoggedIn(false);
    console.log('logging out ...');
    navigate('/')
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-customdarkgreen">
        <Container>
          <Navbar.Brand>
              <NavLink to="/home"><img src={logo} alt="the Mages' Shop's logo" width={200}/></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {loggedIn? 
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/garden" className={({isActive}) => {return((isActive? 'mx-4 px-3 py-2 rounded-md text-lg no-underline bg-customlightgreen text-black' : 'mx-4 px-3 py-2 rounded-md text-lg no-underline text-black')
                )}}>Garden</NavLink>
                <NavLink to="/forest" className={({isActive}) => {return((isActive? 'mx-4 px-3 py-2 rounded-md text-lg no-underline bg-customlightgreen text-black' : 'mx-4 px-3 py-2 rounded-md text-lg no-underline text-black')
                )}}>Forest</NavLink>
                <NavLink to="/workshop" className={({isActive}) => {return((isActive? 'mx-4 px-3 py-2 rounded-md text-lg no-underline bg-customlightgreen text-black' : 'mx-4 px-3 py-2 rounded-md text-lg no-underline text-black')
                )}}>Workshop</NavLink>
                <NavLink to="/barn" className={({isActive}) => {return((isActive? 'mx-4 px-3 py-2 rounded-md text-lg no-underline bg-customlightgreen text-black' : 'mx-4 px-3 py-2 rounded-md text-lg no-underline text-black')
                )}}>Barn</NavLink>
              </Nav>
            </Navbar.Collapse>
          : null}
          <Navbar.Brand>
            {loggedIn? <button onClick={logOut} className='mx-4 px-3 py-2 rounded-md text-lg no-underline bg-customlightgreen text-black' >Log Out</button>
            :
            <img src={barrenFieldIcon} alt="the Mages' Shop's logo" width={80}/>}
          </Navbar.Brand>
        </Container>
      </Navbar>
      {props.children}
    </div>
  );
}

export default Header;