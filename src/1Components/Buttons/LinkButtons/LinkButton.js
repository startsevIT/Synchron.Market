import { Link } from "react-router-dom";
import "./LinkButton.css"

export default function Button({to, text }) {
  return (
    <Link to={to}>
      <button className="link_button" >
        {text}
      </button>
    </Link>
  );
}
