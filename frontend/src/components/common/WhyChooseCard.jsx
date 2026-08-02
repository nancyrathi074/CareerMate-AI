function WhyChooseCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
      "
    >
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-cyan-500/10
          text-cyan-400
          flex
          items-center
          justify-center
          text-3xl
          mb-6
        "
      >
        <Icon />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      <p className="text-slate-400 leading-8">
        {description}
      </p>
    </div>
  );
}

export default WhyChooseCard;