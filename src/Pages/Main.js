import { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { GetAllDirectionsAsync } from "../Synchron.Core/WebApi/Directions";

export default function Main() {
  const [directions, setDirections] = useState([]);

  useEffect(() => {GetAllDirectionsAsync().then(data => setDirections(data))},[]);

  return (
    <div className="main">
      <div className="image_label">
        Синхрон.Маркет – это инновационный онлайн-сервис в сфере рекламных услуг. Медиаресурс, который позволит рекламному агентству и бизнесу найти друг друга и выстроить взаимовыгодное сотрудничество без посредников.
      </div>
      <div className="directions_block">
        <h3>
          Каталог услуг
        </h3>
        <p className="text">
        Синхрон.Маркет – это инновационный онлайн-сервис в сфере рекламных услуг. Медиаресурс, который позволит рекламному агентству и бизнесу найти друг друга и выстроить взаимовыгодное сотрудничество без посредников.
        </p>
        <div className="slider">
          {directions.map((x) => 
          <div className="slide" key={x.id}>
            <Card 
            title={x.name} 
            subspecies={x.subspecies} 
            img={x.img}/>
          </div>)}   
        </div>
      </div>
    </div>   
  );
}

