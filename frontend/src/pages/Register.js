import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    function handleClose() {
        navigate('/')
    }

    function register(e) {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/register/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : username,
                email : email,
                password : password 
            })
        })
        .then((response) => {
            // Check the actual status code received
            console.log("Response Status:", response.status);
            if (response.status === 201) {
                setShowSuccess(true);
            };
            return response.json()
        })
        .then((data) => {
            console.log(data);
            
        })
        .catch((error) => {} )
    }

    return (
        <div className="min-h-screen bg-custombg p-10">
            <div className="bg-secondcustombg p-4 flex flex-col justify-center space-x-4 leading-loose" >
                <div className="text-center">
                    <h1>🌱 Welcome to the Mages' Shop 🌙</h1>
                </div>
                
                <div className="text-center">
                    <form id='registration' onSubmit={register} className='my-6' >
                    <div className='md:flex md:items-center mb-4'>
                        <label for='username' className='md:w-1/4' >Username</label>
                        <input id='username' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}} className='px-2 md:w-2/4 bg-custombg mx-4 rounded-md' />
                    </div>
                    <div className='md:flex md:items-center mb-4'>
                        <label for='email' className='md:w-1/4'>Email</label>
                        <input id='email' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} className='px-2 md:w-2/4 bg-custombg mx-4 rounded-md' />
                    </div>
                    <div className='md:flex md:items-center mb-4'>
                        <label for='password' className='md:w-1/4'>Password</label>
                        <input id='password' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} className='px-2 md:w-2/4 bg-custombg mx-4 rounded-md' />
                    </div>
                    <Button variant='success' onClick={register} >Create my account</Button>
                    </form>
                </div>
                
            </div>

        <Modal
        show={showSuccess}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton className='bg-custombg' >
            <Modal.Title>Congrats !</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-custombg'>
            <p>Your account has beeen created.</p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#e5e0dc" }}>
            </Modal.Footer>
        </Modal>
        </div>
        
    )
}

export default Register