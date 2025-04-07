import Category from "../components/Category";

function SelectCategory(){

    const categories = [
        {
            id: 1,
            name: 'Streaming📽️'
        },
        {
            id: 2,
            name: 'Games🎮'
        },
        {
            id: 3,
            name: 'Education🧑‍🎓'
        },
        {
            id: 4,
            name: 'Music🎸'
        },
        {
            id: 5,
            name: 'HealthCare💪'
        }
    ];
    
    const count = categories.length+1;
    categories.push({
        id: count,
        name: 'Custom'
    })

    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-4">
                {categories.map((category) => (
                    <Category key={category.id} id={category.id} text={category.name}/>
                ))}
            </div>
        </div>
    );
}

export default SelectCategory;