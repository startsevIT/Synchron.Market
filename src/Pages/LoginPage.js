import Form from "../Components/Form";
import { LoginDTO } from "../DTOs/LoginDTO";
import { LoginUser } from "../Synchron.Core/Application/Users";

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

