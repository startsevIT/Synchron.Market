const storage = sessionStorage;

export const GetToken = () => 'Bearer ' + storage.getItem("token");
export const RemoveToken = () => storage.removeItem("token");
export const SetToken = (token) => storage.setItem("token", token);
export const UpdateToken = (token) => { RemoveToken(); SetToken(token) }; 
export const SetAccountInStorage = (account) => storage.setItem("fio", JSON.stringify(account)); 
export const RemoveAccountInStorage = () => storage.removeItem("fio"); 
export const GetAccountInStorage = () => JSON.parse(storage.getItem("fio")); 
