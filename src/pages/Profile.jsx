import { ArrowLeft } from "lucide-react";
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

        if(response.status === 401){
            navigate('/login');
        }

        let data = await response.json();
        setUser(data[0]);
    }
    
    useEffect(() => {
        getUser();
    }, []);
    
    return(
        <section className="flex flex-col w-full h-dvh">
            <nav className="flex justify-between text-white p-3"> 
                <div className="gap-3 flex items-center">
                    <ArrowLeft size={28} onClick={() => navigate(-1)} className="cursor-pointer"/>
                    <p className="text-lg font-semibold">{user.fullname}</p>
                </div>
                <div>
                    <img
                        src="src/assets/user/user_black.svg"
                        alt="Perfil do usuário"
                        className="bg-gray-200 pointer-events-auto pt-1 w-10 h-10 rounded-full hover:cursor-pointer hover:scale-105 transition duration-500"
                    />
                </div>
            </nav>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-2xl font-inter">Welcome, <span className="font-semibold">{`${user.fullname}`}</span></h1>
            </div>
        </section>
    );
}

export default Profile;