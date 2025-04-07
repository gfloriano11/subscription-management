import Category from "../components/Category";
import GoBackButton from '../components/GoBackButton';

function SelectCategory(){

    const categories = [
        {
            id: 1,
            name: 'Streaming📽️',
            path: 'streaming'
        },
        {
            id: 2,
            name: 'Games🎮',
            path: 'games'
        },
        {
            id: 3,
            name: 'Education🧑‍🎓',
            path: 'education'
        },
        {
            id: 4,
            name: 'Music🎸',
            path: 'music'
        },
        {
            id: 5,
            name: 'HealthCare💪',
            path: 'healthcare'
        }
    ];

    
    const count = categories.length+1;
    categories.push({
        id: count,
        name: 'Custom',
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