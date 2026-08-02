import "./StepCard.css";

function StepCard({ step, title, description }) {
  return (
    <div className="step-card">
      <div className="step-number">{step}</div>

      <div className="step-icon">
        ⭐
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default StepCard;