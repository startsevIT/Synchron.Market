import { Link } from "react-router-dom";
import Button from "../../1Components/Buttons/MainButtons/MainButton.js";
import MiniAccount from "../MiniAccount/MiniAccount.js";
import { Logo } from "../../1Components/Logo/Logo.js";
import LinkButton from "../../1Components/Buttons/LinkButtons/LinkButton.js"
import "./Header.css"


export default function Header() {
  return (
    <header>
      <div className="header-top">
        <a href=""><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
        <a href=""><i className="fab fa-telegram" aria-hidden="true"></i></a>
        <div>
          (343)789-123
        </div>
        <div>
          пн-вс 8:00 – 21:00
        </div>
        <div>
          Заказать звонок
        </div>
      </div>
      <div className="header-bottom">
        <Logo/>
        <menu>
          <LinkButton to="/about" text="О проекте"/>
          <LinkButton to="/" text="Главная"/>
          <LinkButton to="/orders" text="Заявки"/>
          <LinkButton to="/#" text="Техподдержка"/>
        </menu>
        <div className="account_button"> 
        {sessionStorage.getItem("token") ? 
          <Link to="/account">
            <MiniAccount/>
          </Link>
          : 
          <Link to="/login">
            <Button text="Войти"/>
          </Link>}
        </div>
      </div>
    </header>
  );
}



