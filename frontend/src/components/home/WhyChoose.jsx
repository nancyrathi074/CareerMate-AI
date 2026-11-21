
import "./WhyChoose.css";
import { whyChoose } from "../../data/whyChoose";

function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-heading">
          <span className="section-eyebrow">WHY CAREERMATE</span>

          <h2>Designed around your career goals.</h2>

          <p>
            Bring your career preparation activities
            together in one organised workspace.
          </p>
        </div>

        <div className="why-grid">
          {whyChoose.map((item) => {
            const Icon = item.icon;

            return (
              <article className="why-card" key={item.title}>
                <div className="why-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
