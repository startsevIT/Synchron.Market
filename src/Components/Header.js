import { Link } from "react-router-dom";
import Button from "./Button";
import { Logo } from "./Logo";
import MiniAccount from "./MiniAccount";

export default function Header() {
  return (
    <header style={{
      height: "100%"
    }}>
      <div className="header-top" style={{
        display: "flex",
        backgroundColor: "#2C3950",
        color: "white",
        justifyContent: "right",
        paddingRight: "7.5em",
        paddingBlock: "0.3em",
        gap: "1em"
      }}>
        <a href=""><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
        <a href=""><i className="fab fa-telegram" aria-hidden="true"></i></a>
        <div>
        (343)789-123
        </div>
        <div>
        пн-вс 8:00 – 21:00
        </div>
        <div>
          <div>
            Заказать звонок
          </div>
        </div>
      </div>
      <div className="header-bottom" style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: "10vw",
        paddingInline: "1vw",
        backgroundColor: "#F5F3F6",
        boxShadow: "0px 4px 4px 0px #7C7E6340"

      }}>
        <Logo/>
        <menu style={{
          display: "flex",
          justifyContent: "center",
          gap: "1vw",
          fontSize: "1.5vw",
          alignItems: "center"
        }}>
          <Link to="/">
            <div style={{color: "black"}}>Главная</div>
          </Link>
          <Link to="/orders">
            <div style={{color: "black"}}>Заявки</div>
          </Link>
          <div>Отзывы</div>
          <div>Техподдержка</div>
        </menu>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px"
        }}> 
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



