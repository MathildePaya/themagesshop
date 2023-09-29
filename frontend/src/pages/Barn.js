import { useEffect, useState } from "react"
import BarnCard from "../components/BarnCard";



function Barn() {

    const [barn, setBarn] = useState();
    const items = ['lavender', 'sage', 'ginger'];

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/barns/', {
            headers : {
                'Content-Type' : 'application/json',
                Authorization : 'Bearer ' + localStorage.getItem('access')
            }
        })
        .then((response) => response.json())
        .then((data) => {
        const filteredData = data.barn.filter((item) => item.owner_id === 0);
        setBarn(filteredData[0]);
        })
    }, []);


    return (
        <div className="h-screen bg-custombg p-10">
            <div className="bg-secondcustombg p-4 flex space-x-4" >
                {barn?
                items.map((item) => {return (
                    (barn[item].discovered === 1) ?
                    (<BarnCard plant={item} stock={barn[item].stock} />
                    ) : null
                )})
                :null
                }
            </div>
        </div>
        
    )
}

export default Barn