import { useEffect, useState } from "react";
import Category from "../components/Category";
import GoBackButton from '../components/GoBackButton';

async function getCategory(){
    
    const response = await fetch('localhost:8000/category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok){
        throw new Error('Error to fetch categories');
    }

    const categories = await response.json();
    return categories;
}

function SelectCategory(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategory();
    })

    
    const count = categories.length+1;
    categories.push({
        id: count,
        name: 'Custom❓',
        path: 'custom'
    })
    
    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-4">
                {categories.map((category) => (
                    <Category key={category.id} id={category.id} text={category.name} path={category.path}/>
                ))}
            </div>
            <div className="flex justify-center">
                <GoBackButton/>
            </div>
        </div>
    );
}

export default SelectCategory;