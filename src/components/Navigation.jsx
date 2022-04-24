import { Link } from "react-router-dom";
import Logo from "../assets/barbecue.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">
        <img className="nav_img" src={Logo} alt="" />
      </Link>
      <h3 className="nav_title">Firehouse BBQ</h3>
      <div className="spacer"></div>
      <ul className="nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
