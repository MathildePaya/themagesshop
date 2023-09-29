import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RangeSlider from 'react-bootstrap-range-slider';

function NewPlot(props) {
  
  const [value, setValue] = useState(10);


  const handleClose = () => props.setShowNewPlot(false);
  const handleShow = () => props.setShowNewPlot(true);
  const handleClick = () => props.newField(value);
  
  return (
    <>
      <Button variant='warning' onClick={handleShow}>
        Clear a new plot
      </Button>

      <Modal
        show={props.showNewPlot}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-custombg'>
          <Modal.Title>Do you want to clear a new plot ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-custombg'>
          <p>Size of your new plot : </p>
          <RangeSlider variant='success' value={value} onChange={e => setValue(e.target.value)} step={5} min={5} max={50}/>
          <p>It will cost you {value*200/5} coins.</p>

        </Modal.Body>
        <Modal.Footer className='bg-custombg'>
          <Button variant='success' onClick={handleClick}>Clear</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 

export default NewPlot;