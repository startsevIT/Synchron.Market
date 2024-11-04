export function Card({ title, subspecies }) {
  return (
    <div className="direction_card">
      <div className="text">
        <h4>
          {title}
        </h4>
        <p>
          {subspecies.map(x => x.name + ", ")}
        </p>
      </div>
      <div 
      className="img"
      style={{ backgroundImage: "url(https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13)"}}
      >
      </div>
    </div>
  );
}
