import Category from "../components/Category";

function SelectCategory(){

    const category = [
        {
            number: 1,
            category: 'Streaming'
        },
        {
            number: 2,
            category: 'Jogos'
        },
        {
            number: 3,
            category: 'Educação'
        }
    ];

    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter'>Choose Category:</h1>
            </div>
            <div>
                {category.map((card) => (
                    <Category text={card.category}/>
                ))}
            </div>
        </div>
    );
}

export default SelectCategory;