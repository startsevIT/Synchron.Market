import Form from "../Components/Form";
import Header from "../Components/Header";
import { LoginDTO } from "../DTOs/LoginDTO";

export default function LoginPage() {
  return (
    <div style={{
      height: "100vh",
      display: "grid",
      gridTemplateRows: "1fr 8fr"
    }}>
      <div>
      <Form title="Вход" data={LoginDTO} buttonText="Войти"/>       
      </div>
    </div>
  );
}

