import { useEffect } from "react";
import { useState } from "react";
import { GetAllOrdersAsync } from "../../../Synchron.Core/WebApi/Orders";
import OrderCard from "../../../2Widgets/OrderCard/OrderCard";
import "./OrderList.css"


export default function OrdersList() {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => { GetAllOrdersAsync().then(data => setOrders(data)) }, []);
  
    return (<div className="orders">
      {orders.map(x => 
      <OrderCard key={x.id}
      id={x.id.substring(0, 8)} 
      title={x.title} 
      description={x.description} 
      direction={x.directionName} 
      subspecies={x.subspeciesName} 
      deadline={x.deadLine} 
      commentsCount={x.commentsCount}/>)}
    </div>);
  }
  