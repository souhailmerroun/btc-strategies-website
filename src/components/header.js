import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{siteTitle}</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav"> {/* ms-auto to push nav to the right */}
          <li className="nav-item">
            <Link className="nav-link" to="/technical-analysis/btc">BTC</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/technical-analysis/eth">ETH</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/technical-analysis/sol">SOL</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
