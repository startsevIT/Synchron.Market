import "./InfoBlock.css"

export function InfoBlock({ title, value }) {
  return <div className="info_block">
    <div className="title">{title}</div>
    <div className="value">{value}</div>
  </div>;
}
