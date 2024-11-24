import "./DirectionCard.css"

export function DirectionCard({ title, subspecies, img }) {
  return (
    <div className="direction_card">
      <div className="text">
        <h4>
          {title}
        </h4>
        <p>
          {subspecies.map(x => x.name.toLowerCase() !== "другое" ?  x.name + ", " : "")}другое
        </p>
      </div>
      <div 
      className="img"
      style={{ backgroundImage: `url(${img})`}}
      >
      </div>
    </div>
  );
}
