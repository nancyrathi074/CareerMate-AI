
import "./HowItWorks.css";
import {
  FiUser,
  FiTool,
  FiTrendingUp
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiUser />,
    title: "Set your direction",
    description:
      "Choose your career goals and identify the areas you want to work on."
  },
  {
    number: "02",
    icon: <FiTool />,
    title: "Use the right tools",
    description:
      "Review your resume, practise interviews and explore suitable job opportunities."
  },
  {
    number: "03",
    icon: <FiTrendingUp />,
    title: "Keep improving",
    description:
      "Follow your roadmap, develop new skills and work towards your next opportunity."
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="how-container">

        <div className="how-heading">
          <span className="section-eyebrow">HOW IT WORKS</span>

          <h2>A simple way to move ahead.</h2>

          <p>
            A clear process to help you organise your
            career preparation and take the next step.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-top">
                <span className="step-icon">{step.icon}</span>
                <span className="step-number">{step.number}</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
