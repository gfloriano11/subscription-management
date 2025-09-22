import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderFormContent from "../components/Auth/RenderFormContent";

function Register(){
    const [stage, setStage] = useState(1);
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [salary, setSalary] = useState('');
    const [gender, setGender] = useState('');
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token){
            navigate('/home');
        }
    })

    const values = {
        stage,
        name,
        birthdate,
        email,
        password,
        salary,
        gender,
        showPass
    }

    const sets = {
        setStage,
        setName,
        setBirthdate,
        setEmail,
        setPassword,
        setSalary,
        setGender,
        setShowPass
    }

    async function registerUser(){
        const userData = { name, email, password, age, salary, gender };

        const response = await fetch(`http://localhost:8000/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if(!response.ok){
            throw new Error('Cannot register user.');
        }

        if(response.status === 200){
            const userData = { email, password };

            const response = await fetch(`http://localhost:8000/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(userData)
            })

            let data = await response.json();

            if(response.status === 201){

                localStorage.removeItem('token');
                localStorage.setItem('token', data.message);
                navigate('/home');
            }
        }
    }


    return(
        <section className="bg-slate-950 min-h-dvh flex justify-center items-center text-blue-50">
            <div className="ml-5 mr-5 flex flex-col w-full max-w-md bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-xl gap-3">
                <h2 className="text-2xl font-semibold text-white mb-3 text-center">Create your account:</h2>
                <RenderFormContent
                    values={values}
                    sets={sets}
                    registerUser={registerUser}
                />
                <Link to='/login'><p className="text-gray-200 text-center">Already have an account? Enter here</p></Link>
                </div>
        </section>
    )
}

export default Register;