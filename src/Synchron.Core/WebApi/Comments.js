import configData from "../config.json"
import { GetToken } from "../Token";

export async function PostCommentAsync({orderId, title}) {
    await fetch(`${configData.SERVER_URL}/comments/${orderId}`, { 
        method: "POST",
        headers: { 
            'Authorization': GetToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            title: title
        })
    });
}

export async function DeleteCommentAsync({ orderId }) {
    await fetch(`${configData.SERVER_URL}/comments/${orderId}`, { 
        method: "DELETE",
        headers: { 
            'Authorization': GetToken()
        }
    });
}