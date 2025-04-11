import { useEffect, useState } from "react";
import Category from "../components/Category";
import GoBackButton from '../components/GoBackButton';

async function getCategory(){
    
    try{
        const response = await fetch('http://localhost:8000/category', {
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
    } catch (error){
        console.error(error);
    }
    
}

function SelectCategory(){
    
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategory().then((data) => {
            setCategories([...data,
                {
                    id: data.lenght+1,
                    category_name: 'Custom❓',
                    category_path: 'custom',
                }
            ]);
        })
    }, []);

    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-4">
                {categories.map((category) => (
                    <Category key={category.id} id={category.id} text={category.category_name} path={category.category_path}/>
                ))}
            </div>
            <div className="flex justify-center">
                <GoBackButton/>
            </div>
        </div>
    );
}

export default SelectCategory;