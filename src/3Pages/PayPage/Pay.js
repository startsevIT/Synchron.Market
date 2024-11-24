import { Link } from "react-router-dom";

export default function PayPage() {

  return (
    <div className="pay_page">
        <h1>Здесь должна быть оплата, но пока все бесплатно</h1>
        <Link to="/completepay"><button>Продолжить</button></Link>
    </div>
  );
}


