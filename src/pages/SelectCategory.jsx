import Category from "../components/Category";

function SelectCategory(){

    const categories = [
        {
            id: 1,
            category: 'Streaming📽️'
        },
        {
            id: 2,
            category: 'Games🎮'
        },
        {
            id: 3,
            category: 'Education🧑‍🎓'
        },
        {
            id: 4,
            category: 'Music🎸'
        },
        {
            id: 5,
            category: 'HealthCare💪'
        }
    ];
    
    const count = categories.length+1;
    categories.push({
        id: count,
        category: 'Custom'
    })

    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-4">
                {categories.map((category) => (
                    <Category key={category.id} id={category.id} text={category.category}/>
                ))}
            </div>
        </div>
    );
}

export default SelectCategory;