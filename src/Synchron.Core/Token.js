const storage = sessionStorage;

export const GetToken = () => 'Bearer ' + storage.getItem("token");
export const SetToken = (token) => storage.setItem("token", token);
export const SetAccountInStorage = (account) => storage.setItem("fio", JSON.stringify(account)); 
export const GetAccountInStorage = () => JSON.parse(storage.getItem("fio")); 
