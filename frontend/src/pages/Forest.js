import { useEffect, useState } from "react"
import GytrashCard from "../components/GytrashCard";

function Forest() {

    const [gytrashs, setGytrashs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/gytrashs/')
        .then((response) => response.json())
        .then((data) => {
        setGytrashs(data.gytrashs);
        console.log(data)
        })
    }, []);


    return (
        <div className="min-h-screen bg-custombg p-10">
            <div className="bg-secondcustombg p-4 flex space-x-4" >
                {gytrashs ? 
                    gytrashs.map((gytrash) => {
                    return(<GytrashCard id={gytrash.id} name={gytrash.name} icon={gytrash.icon} />)
                    })
                    : null }
            </div>
        </div>
        
    )
}

export default Forest