import Form from "../../1Components/Form/Form";
import { LoginDTO } from "../../DTOs/LoginDTO";
import { LoginUser } from "../../Synchron.Core/Application/Users";
import "./LoginPage.css"


export default function LoginPage() {
  return (
    <div className="login_page">
      <Form 
      title="Вход" 
      data={LoginDTO} 
      buttonText="Войти" 
      handler={LoginUser}
      pTitle="Еще нет аккаунта? "
      link="/registration"
      linkTitle="Пройдите регистрацию"/>       
    </div>
  );
}

