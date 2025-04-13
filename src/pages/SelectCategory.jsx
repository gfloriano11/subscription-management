import { useEffect, useState } from "react";
import Category from "../components/Category";
import GoBackButton from '../components/GoBackButton';

function SelectCategory(){

    const [categories, setCategories] = useState([]);

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

            let data = await response.json();

            data = [...data, {
                id: data.length+1,
                category_name: 'Custom❓',
                category_path: 'custom'
            }];
            
            setCategories(data);
            return data;
        } catch (error){
            console.error(error);
        }
        
    }
    
    useEffect(() => {
        getCategory();
    }, []);

    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-4">
                {categories.map((category) => (
                    <Category 
                    key={category.id} 
                    id={category.id} 
                    text={category.category_name} 
                    path={category.category_path}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <GoBackButton/>
            </div>
        </div>
    );
}

export default SelectCategory;