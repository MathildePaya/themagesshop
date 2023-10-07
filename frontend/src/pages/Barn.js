import { useEffect, useState } from "react"
import BarnCard from "../components/BarnCard";
import { useParams } from "react-router-dom";



function Barn() {

    const [barn, setBarn] = useState();
    const items = ['lavender', 'sage', 'ginger'];
    const {username} = useParams()

    useEffect(() => {
        console.log(username);
        fetch('http://127.0.0.1:8000/api/barn/' + username, {
            headers : {
                'Content-Type' : 'application/json',
                Authorization : 'Bearer ' + localStorage.getItem('access')
            }
        })
        .then((response) => {
            console.log(response.status);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setBarn(data.barn)
            }
        )
    }, []);


    return (
        <div className="h-screen bg-custombg p-10">
            <div className="bg-secondcustombg p-4 flex space-x-4" >
                {barn?
                items.map((item) => {return (
                    (barn[item].discovered === 1) ?
                    (<BarnCard key={item} plant={item} stock={barn[item].stock} />
                    ) : null
                )})
                :null
                }
            </div>
        </div>
        
    )
}

export default Barn