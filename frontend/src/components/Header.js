import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <Navbar expand="lg" className="bg-customdarkgreen">
        <Container>
          <Navbar.Brand href="/home">
              <img src={logo} alt="the Mages' Shop's logo" width={200}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
        </Container>
      </Navbar>
      {props.children}
    </div>
  );
}

export default Header;