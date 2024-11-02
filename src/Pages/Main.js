import { useEffect, useState } from "react";
import Img from "../mainImg.png"
import { Card } from "../Components/Card";

export default function Main() {
  const [directions, setDirections] = useState([]);

  useEffect(() =>
    { 
      fetch("https://a30168-fd46.u.d-f.pw/directions")
      .then(response => response.json())
      .then(data => setDirections(data));
    },[]);
  return (
    <div 
      style={{
      }}
    >
      
      <img 
        src={Img} 
        alt="img" 
        style={{
          objectFit: "cover",
          width: "100%",
          height: "50vh"
        }}
      />
      <div 
      style={{
        position: "absolute",
        width: "50%",
        top: "30%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "3rem",
        textAlign: "right"
      }}
      >
        Синхрон.Маркет – это инновационный онлайн-сервис в сфере рекламных услуг. Медиаресурс, который позволит рекламному агентству и бизнесу найти друг друга и выстроить взаимовыгодное сотрудничество без посредников.
      </div>
      <div 
        style={{
          paddingInline: "5vw",
          paddingBlock: "5vh"
        }}
      >
        <h3 
          style={{
          paddingBottom: "3vh"
          }}
        >
          Каталог услуг
        </h3>
        <div>
        Бизнес очень часто сталкивается с вопросами размещения и изготовления рекламы, продвижения товаров и услуг, с вопросами маркетинга и продаж!
        На рынке рекламных услуг представлены тысячи рекламных компаний. Чтобы выбрать одного исполнителя из множества, Вам потребуется потратить массу времени и финансов.
        Сервис Синхрон.Маркет экономит Ваши финансы и время! Мы - ваш проводник в мир маркетинга и рекламы! 
        Синхрон.Маркет подберет для Вас самые выгодные предложения на рынке. Все подрядчики на платформе – это собственники конструкций и обладатели ресурсов, которые позволят Вам не переплачивать посредникам и работать напрямую.

        Позвоните или оставьте заявку, наш специалист свяжется с Вами и проконсультирует по интересующему вопросу!
        С уважением к Вам и Вашему бизнесу, Cинхрон.Маркет!

        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1vh"
        }}>
          
            {directions.map((x) => 
            <Card title={x.name} subspecies={x.subspecies}/>)}
                
          </div>
        </div>
      </div>
    
  );
}

