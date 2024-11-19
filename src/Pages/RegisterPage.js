import Form from "../Components/Form";
import { RegisterDTO } from "../DTOs/RegisterDTO";
import { RegisterUser } from "../Synchron.Core/Application/Users";

export default function RegisterPage() {
    return (
      <div className="login_page">
        <Form 
        title="Регистрация" 
        data={RegisterDTO} 
        buttonText="Зарегистрироваться" 
        handler={RegisterUser} 
        pTitle="Уже есть аккаунт? "
        link="/login"
        linkTitle="Войдите"/>
      </div>
    );
}