import Button from "./Button.js";
import InputSlot from "./Input.js";
import { Link } from "react-router-dom";

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
            <div className="button">
                <Button text={buttonText}/>
            </div>
            <p>{pTitle}<Link to={link} style={{color: "#1B89DD"}}>{linkTitle}</Link></p>
        </form>
    );
  }
