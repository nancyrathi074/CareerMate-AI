
import "./Hero.css";
import {
  FiArrowUpRight,
  FiFileText,
  FiBriefcase,
  FiBookOpen,
  FiCheckCircle
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-eyebrow">
            A little more direction for your career
          </span>

          <h1>
            Make your next
            <br />
            career move with
            <span> confidence.</span>
          </h1>

          <p className="hero-description">
            From improving your resume to preparing for interviews,
            find practical tools to help you move forward in your career.
          </p>

          <div className="hero-actions">
            <Link to="/dashboard" className="hero-primary-button">
              Explore your dashboard
              <FiArrowUpRight />
            </Link>

            <Link to="/resume-analyzer" className="hero-secondary-button">
              <FiFileText />
              Review your resume
            </Link>
          </div>

          <div className="hero-note">
            <FiCheckCircle />
            <span>Practical tools for every stage of your career</span>
          </div>

        </div>

        <div className="hero-preview">

          <div className="preview-heading">
            <div>
              <span className="preview-label">YOUR WORKSPACE</span>
              <h3>Career overview</h3>
            </div>

            <span className="preview-avatar">C</span>
          </div>

          <p className="preview-description">
            Everything you need to work on your next career step.
          </p>

          <div className="preview-items">

            <Link to="/resume-analyzer" className="preview-item">
              <span className="preview-icon lavender-icon">
                <FiFileText />
              </span>

              <span className="preview-item-content">
                <strong>Resume review</strong>
                <small>Improve your resume</small>
              </span>

              <FiArrowUpRight className="preview-arrow" />
            </Link>

            <Link to="/job-matcher" className="preview-item">
              <span className="preview-icon grey-icon">
                <FiBriefcase />
              </span>

              <span className="preview-item-content">
                <strong>Find suitable roles</strong>
                <small>Explore job matches</small>
              </span>

              <FiArrowUpRight className="preview-arrow" />
            </Link>

            <Link to="/interview-prep" className="preview-item">
              <span className="preview-icon pink-icon">
                <FiBookOpen />
              </span>

              <span className="preview-item-content">
                <strong>Interview practice</strong>
                <small>Prepare for interviews</small>
              </span>

              <FiArrowUpRight className="preview-arrow" />
            </Link>

          </div>

          <div className="preview-footer">
            <span>One step at a time.</span>
            <span>CareerMate</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
