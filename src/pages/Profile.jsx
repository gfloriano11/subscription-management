import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile(){

    const [user, setUser] = useState({});
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

        let data = await response.json();
        setUser(data[0]);
    }
    
    useEffect(() => {
        getUser();
    }, []);
    
    return(
        <section className="flex justify-center items-center">
            <h1 className="text-white text-2xl font-inter">Welcome, <span className="font-semibold">{`${user.fullname}`}</span></h1>
        </section>
    );
}

export default Profile;