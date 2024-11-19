import configData from "../config.json"
import { GetToken } from "../Token";

export async function GetAllRolesAsync() {
    return await fetch(`${configData.SERVER_URL}/roles`, {
        headers:  { 
            'Authorization': GetToken()
        }
    })
    .then(response => response.json());
}

export async function GetRoleAsync({roleId}) {
    return await fetch(`${configData.SERVER_URL}/roles/${roleId}`, {
        headers:  { 
            'Authorization': GetToken()
        }
    })
    .then(response => response.json());
}