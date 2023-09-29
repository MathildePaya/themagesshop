import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import lavenderIcon from '../assets/lavender.png';
import sageIcon from '../assets/sage.png';
import gingerIcon from '../assets/ginger.png';
import { useState } from 'react';

function SeedCards({choice, setChoice}) {

  const [seeds, setSeeds] = useState([
    'lavender',
    'sage',
    'ginger'
  ]);

  const plantIcons = {
    'lavender' : lavenderIcon,
    'sage' : sageIcon,
    'ginger' : gingerIcon
  }

  return (
    <div className='flex'>
    {seeds.map((seed) => 
      {return(
        <Card style={{ width: '8rem' }}>
          <Card.Img className='bg-secondcustombg p-2' variant="top" src={plantIcons[seed]} />
          <Card.Body className='bg-secondcustombg text-center'>
            {choice === seed ?
              <Button variant="success" onClick={() => setChoice(seed)}>{seed}</Button>
            :
              <Button variant="warning" onClick={() => setChoice(seed)}>{seed}</Button>
            }
          </Card.Body>
        </Card>
      )}
    )}
  </div>
  );
}

export default SeedCards;