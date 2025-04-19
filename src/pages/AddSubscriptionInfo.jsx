import { useLocation } from "react-router-dom";

function AddSubscriptionInfo(){

    const location = useLocation();
    const id = location.state.id;

    async function getSubscription(id){

        const response = await fetch(`http://localhost:8000/subscription/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });

        console.log(response);

        if(!response.ok){
            throw new Error('Error to fetch subscription information', response);
        }

        const data = await response.json();
    }

    return(
        <div className="text-white">
            <div>
                <p>add {id} information:</p>
            </div>
            <div>
                <div>
                    <img></img>
                </div>
                <form>
                    <div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddSubscriptionInfo;