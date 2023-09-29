import gytrashIcon from '../assets/gytrashIcon.png';
import GytrashStats from '../components/GytrashStats';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function GytrashProfile() {

    const [gytrash, setGytrash] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/gytrashs/' + id ;
        fetch(url)
        .then((response) => {
            if (response.status === 404){
                //redirect to a 404 page
                navigate('/404');
                return null
            }
            return response.json();
        })
        .then((data) => {
            if (data) {
                setGytrash(data.gytrash)
            }
        })
    }, []);



    return (
        <>
            {gytrash? 
            
            <div className="grid grid-cols-3 gap-4 bg-custombg min-h-screen">
                <div className="bg-secondcustombg m-4 rounded-lg">

                </div>
                <div className=''>
                    <img src={gytrashIcon} alt='drawing of a gytrash' className='max-w-sm mx-auto py-4'/>
                    <div className="bg-secondcustombg m-4 rounded-lg px-4 py-6 ">
                        <h1 className='text-center'>{gytrash.name}</h1>
                        <GytrashStats hunger={gytrash.hunger} energy={gytrash.energy} health={gytrash.health} complicity={gytrash.complicity}/>
                    </div>
                </div>
                <div className="bg-secondcustombg m-4 rounded-lg">

                </div>
            </div>
                
            
            : null}
        </>
        
    )
}

export default GytrashProfile