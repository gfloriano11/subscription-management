import { Link } from "react-router-dom";

function Login(){

    return(
        <section className="bg-slate-950 min-h-dvh flex justify-center items-center text-blue-50">
            <div className="ml-5 mr-5 flex flex-col w-full max-w-md bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-xl gap-3">
                <h2 className="text-2xl font-semibold text-white mb-3 text-center">Enter in your account:</h2>
                <div className="flex flex-col gap-3">
                    <input
                    className="p-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700" 
                    type="text"
                    />
                    <input
                    className="p-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700" 
                    type="password"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <button className="w-full hover:cursor-pointer bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 rounded-md transition">
                        <p>Enter</p>
                    </button>
                    <Link to='/register'><p className="text-gray-200 text-center">Don't have an account? Register here</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Login;