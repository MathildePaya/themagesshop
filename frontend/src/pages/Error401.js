import { useNavigate } from "react-router-dom";


function Error401() {

    const navigate = useNavigate();

    return (
        <div className="h-screen bg-custombg">
            <h1>Error 401 : unauthorized.</h1>
            <button onClick={() => {navigate('/')}} className='bg-customlightgreen p-2 m-2 rounded-md' >Log In</button>
        </div>
    )
}

export default Error401