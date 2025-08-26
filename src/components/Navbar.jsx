import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="w-full bg-slate-950 p-4 flex border border-b-gray-800 justify-end items-center shadow-sm shadow-violet-950 fixed top-0 left-0 z-50">
            <button
                onClick={() => navigate('/profile')}
                className="focus:outline-none"
            >
                <img
                    src="/icons/user.svg"
                    alt="Perfil do usuário"
                    className="w-8 h-8 rounded-full hover:ring-2 hover:ring-white transition"
                />
            </button>
        </nav>
    );
}

export default Navbar;
