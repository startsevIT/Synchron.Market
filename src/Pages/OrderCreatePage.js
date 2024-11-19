import { useEffect } from "react";
import { useState } from "react";
import { GetAllDirectionsAsync } from "../Synchron.Core/WebApi/Directions";
import { PostOrderAsync } from "../Synchron.Core/WebApi/Orders";
import { GetToken } from "../Synchron.Core/Token";

export default function OrderCreatePage() {
    const [directions, setDirection] = useState([]);
    const [subscpecies, setSubspecies] = useState([]);
    const [visible, setVisible] = useState({visibility: "hidden"});

    useEffect(() => { GetAllDirectionsAsync().then(data => setDirection(data)) }, []);

    function Change(e) { 
      setSubspecies(directions.find(x => x.id === e.target.value).subspecies); 
      setVisible({visibility: "visible"});
    };

    const SendForm = async (e) => {
      e.preventDefault();

      if(GetToken() === "Bearer null")
        window.location.href = "/login";
      const formData = Object.fromEntries(new FormData(e.target))
      try { await PostOrderAsync(formData);}
      catch(error) { console.error(error);} 
    }

    return (
    <div className="orders">
      <form onSubmit={SendForm}>
        <div>
          <label for="title">Название</label>
          <input type="text" placeholder="Название" name="title" required></input>
        </div>
        <div>
          <label for="description">Описание</label>
          <input type="text" placeholder="Описание" name="description" required></input>
        </div>
        <div>
          <label for="deadline">Дата окончания</label>
          <input type="date" name="deadline" required></input>
        </div>
        <div>
          <label for="directionId">Направление</label>
          <select  required name="directionId" onChange={Change}>
              {directions.map(x => <option value={x.id}>{x.name}</option>)}
          </select>
        </div>
        <div>
          <label for="subspeciesId" style={visible}>Поднаправление</label>
          <select required id="subspeciesId" name="subspeciesId" style={visible}>
              {subscpecies.map(x => <option value={x.id}>{x.name}</option>)}
          </select>
        </div>
        <button>Создать</button>
      </form>
    </div>);
  }
  