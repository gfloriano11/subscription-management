import { Link } from "react-router-dom";

function Menu(){

    return(
        <div className="flex flex-col justify-center items-center h-dvh bg-slate-950 text-blue-50">
            <div>
                <p>Welcome to Subscription Management!</p>
            </div>
            <div className="flex gap-2">
                <Link
                to={'/home'}>
                    <p>Login</p>
                </Link>
                <Link
                to={'/home'}>
                    <p>Register</p>
                </Link>
            </div>
        </div>
    )
}

export default Menu;