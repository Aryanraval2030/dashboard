import { topProducts } from "../data/dashboardData";

function TopProducts() {
  return (
    <div
      className="bg-[#111827] border border-[#1e2d4a]  stat-border card-glow rounded-xl p-5 bg-dark-700 fade-up"
      style={{ animationDelay: "350ms" }}
    >
      <h3 className="font-syne font-600 text-white text-sm mb-1">
        Top Products
      </h3>
      <p className="text-xs text-gray-500 mb-4">By revenue this month</p>
      <div className="space-y-4">
        {topProducts.map((p, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-xs text-gray-300 font-400">{p.name}</span>
              <span className="text-xs text-white font-500">{p.rev}</span>
            </div>
            <div className="h-1.5 bg-dark-400 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${p.pct}%`,
                  background: `linear-gradient(90deg, #3b82f6, #8b5cf6)`,
                }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {p.sales.toLocaleString()} sales
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TopProducts;
