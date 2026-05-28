function StatCard({ stat, delay }) {
  return (
    <div
      className="bg-[#111827] border border-[#1e2d4a]  fade-up stat-border card-glow rounded-xl p-5 bg-dark-700 relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5"
        style={{
          background: stat.color,
          filter: "blur(24px)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
          style={{
            background: stat.color + "18",
            border: `1px solid ${stat.color}33`,
            color: "white",
          }}
        >
          {stat.icon}
        </div>
        <span
          className={`tag ${stat.up ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"}`}
        >
          {stat.change}
        </span>
      </div>
      <p className="text-2xl font-syne font-700 text-white mb-0.5">
        {stat.value}
      </p>
      <p className="text-xs text-gray-500">{stat.label}</p>
      <p className="text-xs text-gray-600 mt-1">{stat.sub}</p>
    </div>
  );
}

export default StatCard;
