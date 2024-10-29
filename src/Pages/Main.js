import { useEffect, useState } from "react";
import Img from "../mainImg.png"
import { Card } from "../Components/Card";

export default function LoginPage() {
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
        Lorem ipsum dolor sit amet consectetur. Vitae platea dui adipiscing quam amet. Nulla diam
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
          Lorem ipsum dolor sit amet consectetur. Netus mollis suspendisse risus tempor sagittis morbi. Massa et egestas urna purus at cras pretium risus. Leo justo sed venenatis vel egestas semper. Id vitae quis aliquam facilisis amet quis sed. Leo est diam mi eget quam adipiscing. Potenti nibh platea amet posuere pulvinar at nunc adipiscing. Risus augue in ultricies facilisi imperdiet. Condimentum blandit sagittis morbi cursus.
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

