import Button from "./Button.js";
import Input from "./Input.js";

export default function Form({title, data, buttonText}) {
 
    const CreateLoginDTO = async (e) => {
        const formData = Object.fromEntries(new FormData(e.target))

        try {
            const response = await fetch("https://localhost:7179/users/login",{
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({...formData})
            });

            if(!response.ok){
                throw new Error("Такого пользователя нет");
            }

            const data = await response.json();
            sessionStorage.setItem("token", data)
        }
        catch(error) {
            console.error(error);
        }
    }

    const formContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        border: "1px solid #7C7E63",
        width: "43vw",
        height: "55vh",
        gap: "3vh",
        borderRadius: "10px",
        padding: "5vh 5vw"
    };

    const headerStyle = {
        textAlign: "center",
        fontSize: "3vw"
    };

    const a ={
        display: "grid",
        gridTemplateColumns: data.length > 4 ? "1fr 1fr" : "1fr",
        gap: "1rem"
    }
    
    return (
        <form onSubmit={CreateLoginDTO} style={{
            border: "1px solid #7C7E63",
            marginTop: "5vh",
            marginInline: "25vw",
            borderRadius: "10px",
            padding: "3vh 3vw",
            boxShadow: "10px 10px 10px 10px #7C7E6340"
        }}>
            <h1 style={headerStyle}>{title}</h1>
            <div style={a}>
            {data.map(item=> (  <Input key = {item.key} {...item}/> ))}
            </div>
            <div style={{textAlign: "center"}}>
                <Button text={buttonText}/>
            </div>
            <p>Еще нет аккаунта? Пройдите регистрацию</p>
        </form>
    );
  }
