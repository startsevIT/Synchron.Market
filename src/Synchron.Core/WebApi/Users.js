import configData from "../config.json"
import { GetToken, RemoveToken, SetToken, UpdateToken } from "../Token";

export async function GetAllUsersAsync() {
    return await fetch(`${configData.SERVER_URL}/users`, {
        headers:  { 
            'Authorization': GetToken()
        }
    })
    .then(response => response.json());
}

export async function GetUserAsync() {
    return await fetch(`${configData.SERVER_URL}/users/account`, {
        headers:  { 
            'Authorization': GetToken()
        }
    })
    .then(response => response.json());
}

export async function RegisterUserAsync(formData) {
    await fetch(`${configData.SERVER_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({        
                ...formData ,
                infoAd: formData.infoAd === "on" ? true : false,
                personalData: formData.personalData === "on" ? true : false
            })
    });
}

export async function LoginUserAsync(formData) {
    SetToken(
    await fetch(`${configData.SERVER_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData })
    })
    .then(response => response.json()));
}

export async function SubscribeUserAsync(subscriptionId) {
    UpdateToken(
    await fetch(`${configData.SERVER_URL}/users/subscribe/${subscriptionId}`, {
      method: "POST",
      headers: {'Authorization': GetToken()}
    }).then(response => response.json()));
}

export async function UnSubscribeUserAsync(subscriptionId) {
    UpdateToken(
    await fetch(`${configData.SERVER_URL}/users/subscribe/${subscriptionId}`, {
      method: "POST",
      headers: {'Authorization': GetToken()}
    }).then(response => response.json()));
}

export async function PutUserAsync({companyName, inn = "", firstName = "", name = "", patronymic = "", email = "", phone = "", password = "", imgUrl = ""}) {
    let token = GetToken();
    RemoveToken();
    SetToken(
    await fetch(`${configData.SERVER_URL}/users/update`, { 
        method: "PUT",
        headers: { 
            'Authorization': token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            companyName : companyName,
            inn : inn,
            firstName : firstName,
            name : name,
            patronymic : patronymic,
            email : email,
            phone : phone,
            password : password,
            imgUrl : imgUrl
        })
    }).then(response => response.json()));
}

export async function DeleteUserAsync() {
    await fetch(`${configData.SERVER_URL}/users`, { 
        method: "DELETE",
        headers: { 
            'Authorization': GetToken()
        }
    });
}