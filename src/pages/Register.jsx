import { Link } from "react-router-dom";
import EnterButton from "../components/Auth/EnterButton";
import Input from "../components/Auth/Input";
import { useState } from "react";

function Register(){
    const [showPass, setShowPass] = useState(false);

    return(
        <section className="bg-slate-950 min-h-dvh flex justify-center items-center text-blue-50">
            <div className="ml-5 mr-5 flex flex-col w-full max-w-md bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-xl gap-3">
                <h2 className="text-2xl font-semibold text-white mb-3 text-center">Create your account:</h2>
                <div className="flex flex-col gap-3">
                    <Input placeholder="Your best e-mail :)" type="text"/>
                    <Input placeholder="Add your password" type="password" password showPass={showPass} setShowPass={setShowPass}/>
                </div>
                <div className="flex flex-col gap-2">
                    <EnterButton text="Create Account"/>
                    <Link to='/login'><p className="text-gray-200 text-center">Already have an account? Enter here</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Register;