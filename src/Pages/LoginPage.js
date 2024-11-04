import Form from "../Components/Form";
import { LoginDTO } from "../DTOs/LoginDTO";

export default function LoginPage() {
  return (
    <div className="login_page">
      <Form title="Вход" data={LoginDTO} buttonText="Войти"/>       
    </div>
  );
}

