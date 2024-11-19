import configData from "../../config.json"
import { GetToken } from "../Token";

export async function PostSubscriptionInfoAsync(name, price, description, roleId, time) {
    await fetch(`${configData.SERVER_URL}/subscriptioninfos`, { 
        method: "POST",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name : name,
            price : price,
            description : description,
            roleId : roleId,
            time : time
        })
    });
}

export async function DeleteSubscriptionInfoAsync({subscriptionInfoId}) {
    await fetch(`${configData.SERVER_URL}/subscriptioninfos/${subscriptionInfoId}`, { 
        method: "DELETE",
        headers: { 
            'Authorization': GetToken()
        }
    });
}

export async function GetCustomerSubscriptionsAsync() {
    return await fetch(`${configData.SERVER_URL}/subscriptioninfos/activeCustomer`)
    .then(response => response.json());
}

export async function GetContractorSubscriptionsAsync() {
    return await fetch(`${configData.SERVER_URL}/subscriptioninfos/activeContractor`)
    .then(response => response.json());
}

export async function GetAllSubscriptionInfosAsync() {
    return await fetch(`${configData.SERVER_URL}/subscriptioninfos`)
    .then(response => response.json());
}

export async function PutSubscriptionInfoAsync({subscriptionInfoId, name = "", price  = "", description  = "", time  = ""}) {
    await fetch(`${configData.SERVER_URL}/subscriptioninfos/${subscriptionInfoId}`, { 
        method: "PUT",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name : name,
            price : price,
            description : description,
            time : time
        })
    });
}