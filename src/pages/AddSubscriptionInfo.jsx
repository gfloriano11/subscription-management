import { useLocation } from "react-router-dom";

function AddSubscriptionInfo(){

    const location = useLocation();
    const subscription = location.state.subscription;

    return(
        <div className="text-white">
            <p>add {subscription} information:</p>
        </div>
    );
}

export default AddSubscriptionInfo;