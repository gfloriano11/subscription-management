import FixedSubscription from "../components/FixedSubscription";

function SelectCategory(){
    return(
        
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h1 className='text-white mt-5 text-2xl font-inter font-bold'>Choose Category:</h1>
            </div>
            <div>
                <FixedSubscription/>
            </div>
        </div>
    );
}

export default SelectCategory;