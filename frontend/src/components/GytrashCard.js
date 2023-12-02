import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gytrashIcon from '../assets/gytrashIcon.png';
import { NavLink } from 'react-router-dom';


function GytrashCard({id, name, icon}){

    return(
        <Card text='white' style={{ width: '18rem' }} bg='dark'>
            <Card.Img variant="top" src={gytrashIcon} className='p-4' />
            <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
                <NavLink to={'/gytrash/'+ id} >{name}</NavLink>
            </Card.Body>
        </Card>
    );
}

export default GytrashCard