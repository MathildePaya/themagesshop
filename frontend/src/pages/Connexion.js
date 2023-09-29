import Carousel from 'react-bootstrap/Carousel';
import GytrashCarouselIcon from '../assets/gytrashBanner.jpg';
import FieldCarouselIcon from '../assets/fieldBanner.jpg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function Connexion() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/token/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : username,
                password : password 
            })
        })
        .then((response) => {
            if (response.status === 401) {
                navigate('/401')
            }
            return response.json()
        })
        .then((data) => {
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)
            console.log(localStorage)
            navigate('/home')
        })
    }

    return (
        <div className="bg-custombg p-10 grid grid-cols-3 gap-10">
            <div className="bg-secondcustombg p-4 col-span-2 selection:bg-customlila leading-relaxed">
            <h1 className="indent-8 font-light">Greetings traveler !</h1>
                <br/>
                <p className="text-justify indent-16">Welcome to the enchanting realm of <em className="underline decoration-4 decoration-customlila">the Mages' Shop</em>, a sanctuary that <strong>you</strong> meticulously created to cater to the needs of sorcerers. Within this ethereal enclave, you will <em className="bg-secondcustomlightgreen rounded-md">walk amidst fantastical creatures</em> that you nurture with care and <em className="bg-secondcustomlightgreen rounded-md">beautiful fields</em> where you cultivate the essential ingredients for your own crafts and for mages. Here, they come to replenish their supplies and request the assistance of your gytrashs to protect them in their travels across worlds.</p>
                <p className="text-justify indent-16">Within the hallowed walls of your sanctuary, you encounter not only familiar faces of old companions but also unexpected acquaintances. You will come to realize that <em className="underline decoration-4 decoration-customlila">your role extends far beyond that of a mere merchant</em>. You become a confidant, a listener, and sometimes even a catalyst for change in the lives of those who cross your path. The burdens they bear, the dreams they chase, and the secrets they carry will intertwine with your own destiny, shaping the tapestry of the enchanting world outside the bounds of your farm.</p>
                <p className="text-justify indent-16 font-bold text-customdarklila">Welcome, once again, to the Mages' Shop, where destiny intertwines with enchantment, and extraordinary tales await those who dare to venture forth.</p>
                <Carousel variant='dark'>
                    <Carousel.Item>
                        <img src={GytrashCarouselIcon} alt='First slide' className='w-full'/>
                        <Carousel.Caption>
                            <p>Raise gytrashs, fantastical beasts who can walk between realms.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={FieldCarouselIcon} alt='First slide' className='w-full'/>
                        <Carousel.Caption>
                            <p>Cultivate and harvest your crops.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



            <div className="bg-secondcustombg p-4 leading-loose text-center">
                <h1 className=" font-light mx-auto">Connexion</h1>
                <form id='connexion' onSubmit={login} className='my-6' >
                    <div className='md:flex md:items-center mb-6'>
                        <label for='username' className='md:w-1/4' >Username</label>
                        <input id='username' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}} className='px-2 md:w-3/4 bg-custombg mx-4 rounded-md' />
                    </div>
                    <div className='md:flex md:items-center mb-6'>
                        <label for='password' className='md:w-1/4'>Password</label>
                        <input id='password' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} className='px-2 md:w-3/4 bg-custombg mx-4 rounded-md' />
                    </div>
                <Button variant='success' onClick={login}>Log In</Button>
                </form>
            </div>
            
        </div>
    )
}

export default Connexion