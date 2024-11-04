import { useEffect, useState } from "react";
import OrderCard from "../Components/OrderCard";

export default function LoginPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() =>
      { 
        fetch("https://a30168-fd46.u.d-f.pw/orders")
        .then(response => response.json())
        .then(data => setOrders(data));
      },[]);
  return (
    <div className="orders">
        {orders.map(x => 
            <OrderCard 
            id = {x.id.substring(0,8)}
            title="Билборд на Малышева" 
            description="Самое подробное описание заявки, которое только может быть, подробнее не может быть"
            direction="Реклама"
            subspecies="Билборды"
            deadline="05.03.2025"
            commentsCount="15"/>)}
        
    </div>
  );
}

