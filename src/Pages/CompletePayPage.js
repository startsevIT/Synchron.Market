import { Link } from "react-router-dom";

export default function CompletePayPage() {

  return (
    <div className="pay_page">
        <h1>Поздравляем с покупкой. Воспользуйтесь вашим новым функционалом</h1>
        <Link to="/"><button>Продолжить</button></Link>
    </div>
  );
}


