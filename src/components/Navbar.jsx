import { CircleUserRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="w-full bg-slate-950/0 p-3 pointer-events-none flex justify-end items-center fixed top-0 left-0 z-50">
            <Link to="/profile">
                <img
                    src="src/assets/user/user_black.svg"
                    alt="Perfil do usuário"
                    className="bg-gray-200 pointer-events-auto pt-1 w-10 h-10 rounded-full hover:cursor-pointer hover:scale-105 transition duration-500"
                />
            </Link>
        </nav>
    );
}

export default Navbar;
