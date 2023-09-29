import Card from 'react-bootstrap/Card';
import lavenderIcon from '../assets/lavender.png';
import sageIcon from '../assets/sage.png';
import gingerIcon from '../assets/ginger.png';


function BarnCard(props) {

  const plantIcons = {
    'lavender' : lavenderIcon,
    'sage' : sageIcon,
    'ginger' : gingerIcon
  }

  return (
    props.stock === 0 ? (
      <Card border='danger' style={{ width: '8rem' }}>
        <Card.Img className='bg-thirdcustombg p-2' variant="top" src={plantIcons[props.plant]} />
        <Card.Body className='bg-thirdcustombg text-center'>
          <p>En stock : {props.stock}.</p>
        </Card.Body>
      </Card>
    ) : (
      <Card border='success' style={{ width: '8rem' }}>
        <Card.Img className='bg-secondcustombg p-2' variant="top" src={plantIcons[props.plant]} />
        <Card.Body className='bg-secondcustombg text-center'>
          <p>En stock : {props.stock}.</p>
        </Card.Body>
      </Card>
    )
  )

}

export default BarnCard;