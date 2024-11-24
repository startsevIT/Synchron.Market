import "./OrderCard.css"

export default function OrderCard({ id, title, description, direction, subspecies, deadline, commentsCount}) {
  return (
    <>
        <div className="order_card">
            <span>№ {id}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="direction_info">
                <div className="direction">{direction}</div>
                <div className="subspecies">{subspecies}</div>
            </div>
            <div className="infro_info">
              <div className="container_deadline">
                <div className="header">Сроки:</div>
                <div className="content">{deadline}</div>
              </div>
              <div className="container_comments">
                <div className="header">Комментарии:</div>
                <div className="content">{commentsCount}</div>
              </div>
            </div>
        </div>
    </>
  );
}

