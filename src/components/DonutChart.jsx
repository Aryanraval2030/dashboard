function DonutChart() {
  const segments = [
    { label: "Products", pct: 40, color: "#3b82f6" },
    { label: "Services", pct: 20, color: "#8b5cf6" },
    { label: "Licenses", pct: 20, color: "#10b981" },
    { label: "Others", pct: 12, color: "#1a2540" },
  ];
  let offset = 0;
  const r = 55;
  const cx = 80;
  const cy = 80;
  const circ = 2 * Math.PI * r;

  return (
    <div
      className="bg-[#111827] border border-[#1e2d4a] stat-border card-glow rounded-xl p-5 bg-dark-700 fade-upp"
      style={{ animationDelay: "300ms" }}
    >
      <h3 className="font-syne font-600 text-white text-sm mb-1">
        Revenue Split
      </h3>
      <p className="text-xs text-gray-500 mb-4">By category</p>
      <div className="flex flex-col justify-center grid-cols-1 items-center gap-5">
        <svg width="160" height="160" viewBox="0 0 160 160">
          {" "}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#1a2540"
            strokeWidth="20"
          />
          {segments.map((s, i) => {
            const dash = (s.pct / 100) * circ;
            const gap = circ - dash;
            const el = (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="20"
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={(-offset * circ) / 100}
                transform={`rotate(-90 ${cx} ${cy})`}
                style={{ transition: "all .4s" }}
              />
            );
            offset += s.pct;
            return el;
          })}
          <text
            x={cx}
            y={cy - 6}
            textAnchor="middle"
            fill="white"
            fontSize="20"
            fontFamily="Syne"
            fontWeight="700"
          >
            ₹84L
          </text>
          <text
            x={cx}
            y={cy + 10}
            textAnchor="middle"
            fill="#4b5563"
            fontSize="9"
          >
            Total
          </text>
        </svg>
        <div className="flex-1 space-y-2.5">
          {segments.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: s.color }}
              />
              <span className="text-xs text-gray-400 flex-1">{s.label}</span>
              <span className="text-xs text-white font-500">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonutChart;
