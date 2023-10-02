import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SellIcon from '../assets/sell.png';


function SellPlot(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  function sellField() {
    const url = 'http://127.0.0.1:8000/api/fields/' + props.id
    fetch(url, {
      method : 'DELETE',
      headers : {
        'Content-Type' : 'application/json',
        Authorization : 'Bearer ' + localStorage.getItem('access')
      }
    })
    .then((response) => {
      if (!response.ok){
        throw new Error('Something went wrong :(')
      }
    }).catch((e) => {console.log(e)});
    setShow(false);
    props.setRefresh(props.refresh+1)
  }
  
  return (
    <>
      <img className="w-[80px] mx-auto p-2" src={SellIcon} onClick={handleShow} alt='selling'/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-custombg'>
          <Modal.Title>Do you want to sell this plot ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-custombg'>
          <p>Size of your plot : {props.size}m².</p>
          <p>You will receive {props.size*200/5} coins.</p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#e5e0dc" }}>
          <Button variant='success' onClick={sellField}>Sell</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 

export default SellPlot;