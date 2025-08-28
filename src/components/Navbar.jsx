import { CircleUserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="w-full bg-slate-950/0 p-4 pointer-events-none flex justify-end items-center fixed top-0 left-0 z-50">
            <button
                onClick={() => navigate('/profile')}
                className="focus:outline-none"
            >
                <img
                    src="src/assets/user/user_black.svg"
                    alt="Perfil do usuário"
                    className="bg-gray-200 pointer-events-auto pt-0.5 w-8 h-8 rounded-full hover:ring-2 hover:ring-white transition"
                />
            </button>
        </nav>
    );
}

export default Navbar;
