import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Harvest(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    const updatedField = {size: props.size, state: 'fallow', plant: 'none'};
    props.updateField(props.id, updatedField);
  };
  
  return (
    <>
      <Button variant='success' onClick={handleShow}>
        Harvest
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-custombg' onClick={handleClick}>
          <Modal.Title>Congrats !</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-custombg'>
          <p>You harvested {props.plant}.</p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#e5e0dc" }}>
        </Modal.Footer>
      </Modal>
    </>
  );
} 

export default Harvest;