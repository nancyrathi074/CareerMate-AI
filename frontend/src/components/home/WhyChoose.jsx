import WhyChooseCard from "../common/WhyChooseCard";
import { whyChoose } from "../../data/whyChoose";

function WhyChoose() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            Why Choose CareerMate AI?
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Everything you need to build a stronger resume,
            prepare for interviews, and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.map((item) => (
            <WhyChooseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;