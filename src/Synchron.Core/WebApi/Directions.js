import configData from "../../config.json"
import { GetToken } from "../Token";

export async function PostDirectionAsync({directionName, subspecies}) {
    await fetch(`${configData.SERVER_URL}/directions`, { 
        method: "POST",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name : directionName,
            subspecies: subspecies
        })
    });
}

export async function DeleteDirectionAsync({directionId}) {
    await fetch(`${configData.SERVER_URL}/directions/${directionId}`, { 
        method: "DELETE",
        headers: { 
            'Authorization': GetToken()
        }
    });
}

export async function GetAllDirectionsAsync() {
    return await fetch(`${configData.SERVER_URL}/directions`)
    .then(response => response.json());
}

export async function GetDirectionAsync({ directionId }) {
    return await fetch(`${configData.SERVER_URL}/directions/${directionId}`)
    .then(response => response.json());
}

export async function PutDirectionAsync({directionId, directionName = "", subspecies = []}) {
    await fetch(`${configData.SERVER_URL}/directions/${directionId}`, { 
        method: "PUT",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name : directionName,
            subspecies: subspecies
        })
    });
}