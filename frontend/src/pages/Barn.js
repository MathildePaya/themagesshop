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
        .then((response) => {
            console.log(response.status);
            return response.json();
        })
        .then((data) => {
            // Replace 'desiredOwnerName' with the name you want to filter by
            const desiredOwnerName = 'maddie';
      
            // Find the barn with the desired owner
            const barnWithDesiredOwner = data.barn.find((barn) => barn.owner.username === desiredOwnerName);
      
            if (barnWithDesiredOwner) {
              console.log(barnWithDesiredOwner);
              setBarn(barnWithDesiredOwner);
            } else {
              console.log(`No barn found with owner name: ${desiredOwnerName}`);
              console.log(data.barn[0].owner)
              console.log(data)
            }
        })
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