import { Link, Outlet } from "react-router-dom";
import { GetToken } from "../Synchron.Core/Token";


export default function LoginPage() {
 
  return (
    <div className="order_page">
      <div className="operations">
        <Link to={GetToken() === "Bearer null" ? "/login" : "/orders/create"}><p style={{color: "#2C3950"}}>Создание заявки +</p></Link>
        <Link to="/orders"><p style={{color: "#50C878"}}>Список заявок =</p></Link>
        <Link to="#"><p style={{color: "black"}}>Фильтр ?</p></Link>
      </div>
      <Outlet />
    </div>
  );
}


