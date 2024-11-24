import { SetAccountInStorage } from "../Token";
import { GetUserAsync, LoginUserAsync, RegisterUserAsync } from "../WebApi/Users";

export async function LoginUser(formData)
{
    await LoginUserAsync(formData);
    const account = await GetUserAsync(); 
    SetAccountInStorage(account);
    window.location.href = "/account";
}

export async function RegisterUser(formData)
{
    await RegisterUserAsync(formData);
    window.location.href = "/login";
}
