import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home_page">
      <div className="home_text">
        <h1>Firehouse BBQ </h1>
        <p>Barbequed food on your plate makes you sop your plate</p>
        <Link to="/menu" className="button_primary">
          Go to Menu
        </Link>
      </div>
    </div>
  );
}
