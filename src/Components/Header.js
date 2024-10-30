import { Link } from "react-router-dom";
import Button from "./Button";
import { Logo } from "./Logo";

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
        paddingRight: "10vw",
        gap: "2vw"
      }}>
        <a href="">WhatsApp</a>
        <a href="">TELEGRAM</a>
        <div>
          phone number
        </div>
        <div>
          work time
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
          <div>Главная</div>
          <div>Заявки</div>
          <div>Отзывы</div>
          <div>Техподдержка</div>
        </menu>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px"
        }}> 
        
          <Link to="/login">
            <Button text="Войти"/>
          </Link>
        </div>
       
      </div>
    </header>
  );
}



