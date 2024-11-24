import { Outlet } from "react-router-dom";
import { GetToken } from "../../Synchron.Core/Token";
import LinkButton from "../../1Components/Buttons/LinkButtons/LinkButton"
import "./OrdersPage.css"
import { useToast } from "../../2Widgets/ToastProvider/ToastContext";

export default function LoginPage() {
 
  const toast = useToast();
  function isNotAuth()
  {
    if(GetToken() === "Bearer null")
    {
        toast.open("Для продолжения авторизуйтесь","Авторизация")
        return true;  
    }
    return false;
  }
  return (
    <div className="order_page">
      <div className="operations">
        <LinkButton to={isNotAuth() ? "/login" : "/orders/create"} text="Создание заявки +" />
        <LinkButton to="/orders" text="Список заявок =" />
        <LinkButton to="#" text="Фильтр ?" />
      </div>
      <Outlet />
    </div>
  );
}


