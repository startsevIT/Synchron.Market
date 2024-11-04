import Button from "./Button.js";
import Input from "./Input.js";
import { LoginUserAsync } from "../Functions/User.js";
import { Link } from "react-router-dom";

export default function Form({title, data, buttonText}) {
 
    const CreateLoginDTO = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target))
        try {
            await LoginUserAsync(formData);
        }
        catch(error) {
            console.error(error);
        } 
    }
    
    return (
        <form onSubmit={CreateLoginDTO}>
            <h1>{title}</h1>
            <div>
            {data.map(item=> (  <Input key = {item.key} {...item}/> ))}
            </div>
            <div className="button">
                <Button text={buttonText}/>
            </div>
            <p>Еще нет аккаунта? <Link to="/registration" style={{color: "#1B89DD"}}>Пройдите регистрацию</Link></p>
        </form>
    );
  }
