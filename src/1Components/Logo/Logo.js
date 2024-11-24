import { Link } from "react-router-dom";
import "./Logo.css"

export function Logo() {
  return (
  <div className="logo" >
    <Link to="/">
      <b className="logo_left">
        Синxрон.
      </b>
      <b className="logo_right">
        Маркет
      </b>
    </Link>
  </div>);
}
