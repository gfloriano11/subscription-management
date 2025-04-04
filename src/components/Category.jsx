function Category({text}){
    return(
        <div className="flex justify-center w-2xs bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
        gap-2.5 text-white font-inter font-light">
            <p className="font-inter text-3xl font-bold">{text}</p>
        </div>
    );
}

export default Category;