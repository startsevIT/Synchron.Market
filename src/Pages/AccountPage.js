import { useEffect, useState } from "react";
import Button from "../Components/Button.js"

export default function AccountPage() {
  
  const [account, setAccount] = useState([]);

  useEffect( () =>
  { 
    let bearer_token =  sessionStorage.getItem("token");

    fetch("https://a30411-cd22.u.d-f.pw/users/account", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + bearer_token,
        'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => setAccount(data));

    
  },[]);

  return (
    <div className="personal_cabinet">
      <div className="left_part">
        <h1>Личный кабинет</h1>
        <div className="avatar"></div>
        <Button text="Загрузить фото"/>
        <p style={{color:"lightblue"}}>Удалить</p>
      </div>
      <div className="right_part">
        <InfoBlock title="Название компании" value={account.companyName}/>
        <InfoBlock title="ИНН" value={account.inn}/>
        <InfoBlock title="Фамилия" value={account.firstName}/>
        <InfoBlock title="Имя" value={account.name}/>
        <InfoBlock title="Отчество" value={account.patronymic}/>
        <InfoBlock title="E-mail" value={account.email}/>
        <InfoBlock title="Номер телефона" value={account.phone}/>
      </div>
    </div>
  );
}

function InfoBlock({title, value}) {
  return <div className="info_block">
    <div className="title">{title}</div>
    <div className="value">{value}</div>
  </div>;
}

