import { LoginUserAsync } from "../Functions/User.js";
import Button from "./Button.js";
import Input from "./Input.js";

import { Link } from "react-router-dom";

export default function Form({title, data, buttonText}) {
 
    const SendForm = async (e) => {
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
        <form onSubmit={SendForm}>
            <h1>{title}</h1>
            {data.map(item => (
                <Input key = {item.key} {...item}/> 
            ))}
            <div className="button">
                <Button text={buttonText}/>
            </div>
            <p>Еще нет аккаунта? <Link to="/registration" style={{color: "#1B89DD"}}>Пройдите регистрацию</Link></p>
        </form>
    );
  }
