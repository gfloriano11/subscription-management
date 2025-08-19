import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Auth/Input";
import EnterButton from "../components/Auth/EnterButton";
import { useState } from "react";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    async function loginUser(){
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

            localStorage.setItem('token', data.message);
            navigate('/home');
        }
    }

    return(
        <section className="bg-slate-950 min-h-dvh flex justify-center items-center text-blue-50">
            <div className="ml-5 mr-5 flex flex-col w-full max-w-md bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-xl gap-3">
                <h2 className="text-2xl font-semibold text-white mb-3 text-center">Enter in your account:</h2>
                <div className="flex flex-col gap-3">
                    <Input name="email" type="text" placeholder="Your e-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <Input name="password" placeholder="Password" type="password" showPass={showPass} setShowPass={setShowPass} value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="flex flex-col gap-3">
                    <EnterButton text="Login" onClick={() => loginUser()}/>
                    <Link to='/register'><p className="text-gray-200 text-center">Don't have an account? Register here</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Login;