import { useContext, useEffect, useState } from "react"
import GytrashCard from "../components/GytrashCard";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

function Forest() {

    const [gytrashs, setGytrashs] = useState([]);
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    useEffect(() => {
        // Fetch data from a remote API endpoint
    fetch('http://127.0.0.1:8000/api/gytrashs/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access')
        }
      })
        .then((response) => {
          if (response.status === 401) {
            // If unauthorized, set logged-in status to false and navigate to a 401 page
            setLoggedIn(false);
            navigate('/401');
          }
          return response.json();
        })
        .then((data) => {
          // Update the 'fields' state with the fetched data
          setGytrashs(data.gytrashs);
        });
    }, []);


    return (
        <div className="min-h-screen bg-custombg p-10">
            <div className="bg-secondcustombg p-4 flex space-x-4" >
                {gytrashs ? 
                    gytrashs.map((gytrash) => {
                    return(<GytrashCard key={gytrash.id} id={gytrash.id} name={gytrash.name} icon={gytrash.icon} />)
                    })
                    : null }
            </div>
        </div>
        
    )
}

export default Forest