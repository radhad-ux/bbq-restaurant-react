import { Link } from "react-router-dom";

import Logo from "../assets/barbecue.png";

export default function Navigation() {
  return (
    <nav className="navbar_links">
      <Link to="/">
        <img className="navbar_img" src={Logo} alt="" />
      </Link>
      <h3 className="navbar_title">Firehouse BBQ</h3>
      <div className="spacer"></div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
