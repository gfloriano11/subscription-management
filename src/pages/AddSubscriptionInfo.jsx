import { useLocation } from "react-router-dom";

function AddSubscriptionInfo(){

    const location = useLocation();
    const { pathname } = location;
    const url = pathname.split('/');
    const subscription = url[4];

    return(
        <div className="text-white">
            <p>add {subscription} information:</p>
        </div>
    );
}

export default AddSubscriptionInfo;