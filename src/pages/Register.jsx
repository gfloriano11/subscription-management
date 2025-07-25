import { Link } from "react-router-dom";
import { useState } from "react";
import RenderFormContent from "../components/Auth/RenderFormContent";

function Register(){
    const [stage, setStage] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [salary, setSalary] = useState(0);
    const [showPass, setShowPass] = useState(false);

    return(
        <section className="bg-slate-950 min-h-dvh flex justify-center items-center text-blue-50">
            <div className="ml-5 mr-5 flex flex-col w-full max-w-md bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-xl gap-3">
                <h2 className="text-2xl font-semibold text-white mb-3 text-center">Create your account:</h2>
                <RenderFormContent
                    stage={stage}
                    setStage={setStage}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setSalary={setSalary}
                    showPass={showPass}
                    setShowPass={setShowPass}
                />
                <Link to='/login'><p className="text-gray-200 text-center">Already have an account? Enter here</p></Link>
                </div>
        </section>
    )
}

export default Register;