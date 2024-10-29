import { Link } from "react-router-dom";

export function Logo() {
  return <div className="logo" >
    <h2>
      <Link to="/">
        <b style={{
          color: "black"
        }}>
          Синxрон.
        </b>
        <b className="logo_right">
          Маркет
        </b>
      </Link>
    </h2>
  </div>;
}
