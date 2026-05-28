import { useState } from "react";
import { chartData } from "../data/dashboardData";

function BarChart() {
  const [hover, setHover] = useState(null);
  const [type, setType] = useState("rev");
  return (
    <div
      className="bg-[#111827] border border-[#1e2d4a] min-h-[370px] stat-border card-glow rounded-xl p-3 sm:p-5 fade-up overflow-x-auto"
      style={{ animationDelay: "200ms" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        {" "}
        <div>
          <h3 className="font-syne font-600 text-white text-sm">
            Revenue Overview
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Full year 2024 performance
          </p>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {" "}
          {[
            ["rev", "Revenue"],
            ["users", "Users"],
          ].map(([k, l]) => (
            <button
              key={k}
              onClick={() => setType(k)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${type === k ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "text-gray-500 border border-dark-400 hover:text-gray-300"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-end h-[250px] gap-1 min-w-[500px]">
        {" "}
        {chartData.map((d, i) => {
          const val = d[type];
          const isH = hover === i;
          const color = type === "rev" ? "#3b82f6" : "#8b5cf6";
          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center gap-1 group"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              {isH && (
                <div
                  className="text-xs text-white bg-dark-500 rounded px-1.5 py-0.5 whitespace-nowrap"
                  style={{ fontSize: "10px" }}
                >
                  {d.month}: {val}
                  {type === "rev" ? "L" : "k"}
                </div>
              )}
              <div
                className="w-full rounded-t transition-all duration-300"
                style={{
                  height: `${val * 1.9}px`,
                  background: isH ? color : `${color}60`,
                  border: isH ? `1px solid ${color}` : "1px solid transparent",
                }}
              />
              <span
                className="text-gray-400 text-center"
                style={{ fontSize: "9px" }}
              >
                {d.month.slice(0, 1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BarChart;
