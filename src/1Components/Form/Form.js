import Button from "../Buttons/MainButtons/MainButton";
import InputSlot from "../InputSlot/InputSlot";
import { Link } from "react-router-dom";
import "./Form.css"

export default function Form({title, data, buttonText, handler, pTitle, link, linkTitle}) {
 
    const SendForm = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target))
        try { await handler(formData);}
        catch(error) { console.error(error);} 
    }
    
    return (
        <form onSubmit={SendForm}>
            <h1>{title}</h1>
            {data.map(item => <InputSlot key = {item.name} {...item}/> )}
            <Button text={buttonText}/>
            <p>{pTitle}<Link to={link} style={{color: "#1B89DD"}}>{linkTitle}</Link></p>
        </form>
    );
  }
