import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile(){

    const navigate = useNavigate();
    async function getUser(){

        const token = localStorage.getItem('token'); 
        
        if(!token){
            navigate('/login');
        }
        
        const response = await fetch(`http://localhost:8000/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            } 
        })

        console.log(response.status);

        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        getUser();
    }, [])
    return(
        <>
            <h1 className="text-white">Welcome, username!</h1>
        </>
    );
}

export default Profile;