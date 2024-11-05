import Form from "../Components/Form";
import { LoginDTO } from "../DTOs/LoginDTO";
import { LoginUserAsync } from "../Functions/User";

export default function LoginPage() {
  return (
    <div className="login_page">
      <Form title="Вход" data={LoginDTO} buttonText="Войти" handler={LoginUserAsync}/>       
    </div>
  );
}

