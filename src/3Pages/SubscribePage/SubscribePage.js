import { useEffect, useState } from "react";
import { GetAllSubscriptionInfosAsync } from "../../Synchron.Core/WebApi/SubscriptionsInfos";
import { SubscribeUserAsync } from "../../Synchron.Core/WebApi/Users";

export default function SubscribePage({subscriptionsFetch = GetAllSubscriptionInfosAsync}) {
    const [subscriptions, setSubscriptions] = useState([]);
    
    useEffect(() => subscriptionsFetch().then(data => setSubscriptions(data)),[]);

    
    return (
        <div className="subscribe_page">
            <h1>Для продолжения - приобретите подписку</h1>
            <div className="subscribe_cards">
                {subscriptions.map(x => 
                <SubscriptionCard
                key={x.id}
                {...x}
                />)}
            </div>
        </div>
    )
}

function SubscriptionCard({name, description, id, price}) {

    function Pay(id) 
    {
        SubscribeUserAsync(id)
        window.location.href = "/pay";
    }

    return <div className="subscribe_card">
        <div className="card_info">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
        <button onClick={() => Pay(id)} className="card_price">
            <p>{price} Р</p>
        </button>
    </div>;
}
