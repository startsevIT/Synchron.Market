import { useEffect } from "react";
import { useState } from "react";
import { GetAllDirectionsAsync } from "../../../Synchron.Core/WebApi/Directions";
import { PostOrderAsync } from "../../../Synchron.Core/WebApi/Orders";
import { GetToken } from "../../../Synchron.Core/Token";
import MainButton from "../../../1Components/Buttons/MainButtons/MainButton"
import InputSlot from "../../../1Components/InputSlot/InputSlot"
import SelectSlot from "../../../1Components/SelectSlot/SelectSlot"
import TextAreaSlot from "../../../1Components/TextAreaSlot/TextAreaSlot"
import "./OrderCreatePage.css"
import { useToast } from "../../../2Widgets/ToastProvider/ToastContext";
import { useNavigate } from "react-router-dom";

export default function OrderCreatePage() {
    const [directions, setDirection] = useState([]);
    const [subscpecies, setSubspecies] = useState([]);
    const [visible, setVisible] = useState({display: "none"});

    useEffect(() => { GetAllDirectionsAsync().then(data => setDirection(data)) }, []);
    const toast = useToast();
    const navigate = useNavigate();
    function Change(e) { 
      setSubspecies(directions.find(x => x.id === e.target.value).subspecies); 
      setVisible({display: "flex"});
    };

    const SendForm = async (e) => {
      e.preventDefault();
      if(GetToken() === "Bearer null"){

        toast.open("Для продолжения авторизуйтесь","Авторизация")
        navigate("/login");   
        
      }
      const formData = Object.fromEntries(new FormData(e.target))
      try { await PostOrderAsync(formData);}
      catch(error) { console.error(error);} 
      
      navigate("/orders")
      toast.open("Заявка создана","Успех!")
    }

    return (
      <div className="create_order_page">
        
        <form onSubmit={SendForm}>
          <h3>Создание заявки</h3>
          <InputSlot placeholder="Название" required name="title"/>
          <TextAreaSlot placeholder="Описание" required name="description"/>
          <InputSlot placeholder="Дата окончания" required name="deadline" type="date" min={new Date().toISOString().split("T")[0]}/>
          <SelectSlot placeholder="Направление" required name="directionId" onChange={Change} array={directions}/>
          <SelectSlot placeholder="Поднаправление" required name="subspeciesId" array={subscpecies} style={visible}/>
          <MainButton text="Создать" />
        </form>
      </div>);
      
  }
  