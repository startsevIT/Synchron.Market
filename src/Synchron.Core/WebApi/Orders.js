import configData from "../config.json"
import { GetToken } from "../Token";

export async function PostOrderAsync({title, description, deadline, directionId, subspeciesId}) {
    try{
    await fetch(`${configData.SERVER_URL}/orders`, { 
        method: "POST",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            title : title,
            description : description,
            deadline : deadline,
            directionId : directionId,
            subspeciesId : subspeciesId
        })
    });}
    catch { window.location.href = "/subscribe"; }
}

export async function DeleteOrderAsync({orderId}) {
    await fetch(`${configData.SERVER_URL}/orders/${orderId}`, { 
        method: "DELETE",
        headers: { 
            'Authorization': GetToken()
        }
    });
}

export async function GetOrderAsync({orderId})  {
    return await fetch(`${configData.SERVER_URL}/orders/${orderId}`, {
        headers: { 
            'Authorization': GetToken()
        }
    })
    .then(response => response.json());
}

export async function GetAllOrdersAsync() {
    return await fetch(`${configData.SERVER_URL}/orders`, {
        headers:  { 
            'Authorization': GetToken()
        }
    })
    .then(response => response.json());
}

export async function PutOrderAsync({orderId,title = "",description = "",deadline = "",directionId = "",subspeciesId = ""}) {
    await fetch(`${configData.SERVER_URL}/orders/${orderId}`, { 
        method: "PUT",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            title : title,
            description : description,
            deadline : deadline,
            directionId : directionId,
            subspeciesId : subspeciesId
        })
    });
}