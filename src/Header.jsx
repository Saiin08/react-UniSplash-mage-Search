import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_container">
      <h2>UniSplash Image</h2>
      <Link to={"/"} className="back">
        📎 Homepage
      </Link>
    </div>
  );
}
