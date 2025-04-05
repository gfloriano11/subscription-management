import Category from "../components/Category";

function SelectCategory(){

    const category = [
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
    
    const count = category.length+1;
    category.push({
        id: count,
        category: 'Custom'
    })

    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-4">
                {category.map((card) => (
                    <Category key={card.id} id={card.id} text={card.category}/>
                ))}
            </div>
        </div>
    );
}

export default SelectCategory;