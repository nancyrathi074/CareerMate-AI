import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-navbar">
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">c.</span>
          <span>CareerMate</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="/#features" onClick={closeMenu}>Features</a>
          <a href="/#how-it-works" onClick={closeMenu}>How it works</a>
          <Link to="/career-roadmap" onClick={closeMenu}>Career roadmap</Link>
          <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>

          <div className="mobile-nav-actions">
            <Link to="/login" onClick={closeMenu}>Log in</Link>
            <Link to="/signup" className="nav-cta" onClick={closeMenu}>
              Get started <FiArrowUpRight />
            </Link>
          </div>
        </nav>

        <div className="desktop-nav-actions">
          <Link to="/login" className="login-link">Log in</Link>

          <Link to="/signup" className="nav-cta">
            Get started <FiArrowUpRight />
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
