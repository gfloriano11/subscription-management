import { Link } from "react-router-dom";

function LandingPageButton({text, link, color, background, border}){
    return(
        <Link className={`hover:scale-105 duration-150 ${color} tracking-wide font-semibold ${background} min-w-35 max-h-12 p-2.5 pr-4 pl-4 border ${border} rounded-lg text-center`} 
        to={link}>
            <p>{text}</p>
        </Link>
    );
}

export default LandingPageButton;