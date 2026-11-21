
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">c.</span>
              CareerMate
            </Link>

            <p>
              A practical space to improve your resume,
              prepare for interviews and plan your career.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <a href="/#features">Features</a>
            <a href="/#how-it-works">How it works</a>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="footer-column">
            <h3>Career tools</h3>
            <Link to="/resume-analyzer">Resume review</Link>
            <Link to="/job-matcher">Job matching</Link>
            <Link to="/interview-prep">Interview practice</Link>
            <Link to="/career-roadmap">Career roadmap</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get started</h3>
            <p>
              Take a more organised approach
              to your career preparation.
            </p>

            <Link to="/signup" className="footer-cta">
              Create an account
              <FiArrowUpRight />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 CareerMate. All rights reserved.</span>
          <span>Made for your next career step.</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
