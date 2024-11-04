import { useEffect, useState } from "react";

export default function AccountPage() {
  
  const [account, setAccount] = useState([]);

  useEffect( () =>
  { 
    let bearer_token =  sessionStorage.getItem("token");

    fetch("https://a30168-fd46.u.d-f.pw/users/account", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + bearer_token,
        'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => setAccount(data));

    
  },[]);

  return (
    <>
      <div>{account.companyName}</div>
    </>
  );
}

