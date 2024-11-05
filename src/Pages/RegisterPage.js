import Form from "../Components/Form";
import { LoginUserAsync } from "../Functions/User.js";
import { RegisterDTO } from "../DTOs/RegisterDTO";

export default function RegisterPage() {
    return (
      <div className="login_page">
        <Form title="Регистрация" data={RegisterDTO} buttonText="Зарегистрироваться" handler={LoginUserAsync}/>
      </div>
    );
  }