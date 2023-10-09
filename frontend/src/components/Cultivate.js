import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SeedCards from './SeedCards';
import { LoginContext } from '../App';

function Cultivate(props) {
  const [show, setShow] = useState(false);

  const [loggedIn, setLoggedIn, user, setUser, userId, setUserId] = useContext(LoginContext);

  const [choice, setChoice] = useState('nochoice');

  const handleClose = () => {setShow(false); setChoice('nochoice')};
  const handleShow = () => setShow(true);
  const handleClick = () => {
    const updatedField = {farmer: userId, size: props.size, state: 'cultivated', plant: choice};
    props.updateField(props.id, updatedField);
  };
  
  return (
    <>
      <Button variant='warning' onClick={handleShow}>
        Cultivate
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-custombg'>
          <Modal.Title>Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-custombg'>
          <p>Size of your plot : {props.size}m².</p>
          <p>Seed :</p>
          <SeedCards choice={choice} setChoice={setChoice}/>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#e5e0dc" }}>
          <Button variant="success" onClick={handleClick}>Plant</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 

export default Cultivate;