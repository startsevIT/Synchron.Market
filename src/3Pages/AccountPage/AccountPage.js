import Button from "../../1Components/Buttons/MainButtons/MainButton.js"
import { Roles } from "../../Synchron.Core/Dictionaries.js";
import { GetAccountInStorage } from "../../Synchron.Core/Token.js";
import { InfoBlock } from "../../1Components/InfoBlock/InfoBlock.js";
import "./AccountPage.css"
import { useToast } from "../../2Widgets/ToastProvider/ToastContext.js";


export default function AccountPage() {
  
  const account = GetAccountInStorage();
  const toast = useToast();
  return (
    <div className="personal_cabinet">
      <div className="left_part">
        <h1>Личный кабинет</h1>
        <div className="avatar" style={{
          backgroundImage:`url(${account.imgUrl})`,
          backgroundSize: "cover"
        }}></div>
      <Button text="Загрузить фото" OnClickHandler={() => toast.open("Пока не реализовано", "Ошибка")}/>
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
        <div className="roles">
          <div className="title">Статус</div>
          {account.roles.map(x => <div className="role">{Roles()[x]}</div>)}
          
        </div>
      </div>
    </div>
  );
}


