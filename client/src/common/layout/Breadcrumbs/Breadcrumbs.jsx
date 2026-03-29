import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/marketplace" className="breadcrumbs__section">
        Marketplace
      </Link>
      <span>/</span>
      <span>...</span>
      <span>/</span>
      <span>...</span>
      <span>/</span>
      <span className="breadcrumbs__current">Desks</span>
    </nav>
  );
}

export default Breadcrumbs;
