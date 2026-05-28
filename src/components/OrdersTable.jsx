import { orders, statusColors } from "../data/dashboardData";

function OrdersTable() {
  return (
    <div
      className="bg-[#111827] border border-[#1e2d4a] h-[360px] stat-border card-glow rounded-xl bg-dark-700 fade-up overflow-scroll"
      style={{ animationDelay: "400ms" }}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-dark-400">
        <div>
          <h3 className="font-syne font-600 text-white text-sm">
            Recent Orders
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">Latest 5 transactions</p>
        </div>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 px-3 py-1.5 rounded-lg bg-blue-500/10">
          View all →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-400">
              {[
                "Order ID",
                "Product",
                "Customer",
                "Amount",
                "Status",
                "Time",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs text-gray-600 font-400 px-5 py-3 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr
                key={i}
                className="border-b border-dark-500 hover:bg-dark-600 transition-colors"
              >
                <td className="px-5 py-3.5 text-xs text-blue-400 font-500">
                  {o.id}
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-300 max-w-32 truncate">
                  {o.product}
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-400">{o.user}</td>
                <td className="px-5 py-3.5 text-xs text-white font-500">
                  {o.amount}
                </td>
                <td className="px-5 py-3.5">
                  <span className={`tag ${statusColors[o.status]}`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-600">{o.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
