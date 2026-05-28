import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import StatCard from "./components/StatCard.jsx";
import BarChart from "./components/BarChart.jsx";
import DonutChart from "./components/DonutChart.jsx";
import OrdersTable from "./components/OrdersTable.jsx";
import TopProducts from "./components/TopProducts.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";

import { navItems, stats } from "./data/dashboardData.js";

function App() {
  const [activeNav, setActiveNav] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [now, setNow] = useState(new Date().toLocaleTimeString());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setNow(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] flex">
      {" "}
      <Sidebar
        active={activeNav}
        setActive={setActiveNav}
        navItems={navItems}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <main className="flex-1 flex flex-col min-h-screen lg:ml-[260px]">
        {" "}
        {/* Topbar */}
        <header className="sticky top-0 z-40 bg-[#080c14]/80 backdrop-blur border-b border-[#1e2d4a] px-3 sm:px-6 py-3 flex items-center gap-3 min-h-[70px]">
          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white text-2xl flex-shrink-0"
          >
            ☰
          </button>

          {/* Search */}
          <div className="flex-1">
            <div className="relative w-full sm:max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                ⌕
              </span>

              <input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search anything..."
                className="
          w-full
          bg-[#111827]
          border-2 border-[#1e2d4a]
          rounded-lg
          pl-8 pr-4 py-2
          text-xs sm:text-sm
          text-gray-300
          placeholder-gray-600
          focus:outline-none
          focus:border-blue-500/50
          transition-colors
        "
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Time */}
            <span className="hidden sm:block text-xs text-[#b5ceff] font-mono">
              {now}
            </span>

            {/* Notification */}
            <button className="relative w-8 h-8 rounded-lg bg-[#111827] border border-[#1e2d4a] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">🔔</span>

              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-500" />
            </button>

            {/* Mail */}
            <button className="relative w-8 h-8 rounded-lg bg-[#111827] border border-[#1e2d4a] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">✉</span>

              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500" />
            </button>

            {/* Avatar */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
              AD
            </div>
          </div>
        </header>
        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Page header */}
          <div className="mb-6 fade-up">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {" "}
              <div>
                <h1 className="font-syne font-800 text-white text-lg sm:text-xl md:text-2xl tracking-tight">
                  {" "}
                  Good morning, Admin 👋
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                  Here's what's happening with your store today.
                </p>
              </div>
              <button className="btn-primary w-full sm:w-auto text-white text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                {" "}
                <span>+ New Report</span>
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
            {" "}
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} delay={i * 80} />
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-5">
            {" "}
            <div className="xl:col-span-2">
              {" "}
              <BarChart />
            </div>
            <DonutChart />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-5">
            {" "}
            <div className="xl:col-span-2 overflow-x-auto">
              {" "}
              <OrdersTable />
            </div>
            <TopProducts />
          </div>

          {/* Activity row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {" "}
            <ActivityFeed />
            {/* Quick stats mini */}
            <div
              className="bg-[#111827] mt-4 xl:mt-0 border border-[#1e2d4a] xl:col-span-2 stat-border card-glow rounded-xl p-4 sm:p-5 bg-dark-700 fade-up"
              style={{ animationDelay: "500ms" }}
            >
              <h3 className="font-syne font-600 text-white text-sm mb-1">
                Performance Metrics
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Key indicators this week
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {" "}
                {[
                  {
                    label: "Avg. Order Value",
                    value: "₹6,240",
                    icon: "◈",
                    color: "#3b82f6",
                  },
                  {
                    label: "Conversion Rate",
                    value: "3.84%",
                    icon: "◎",
                    color: "#10b981",
                  },
                  {
                    label: "Return Rate",
                    value: "1.2%",
                    icon: "↺",
                    color: "#f59e0b",
                  },
                  {
                    label: "Ticket Resolve",
                    value: "94%",
                    icon: "✓",
                    color: "#8b5cf6",
                  },
                  {
                    label: "Page Load",
                    value: "1.4s",
                    icon: "⚡",
                    color: "#14b8a6",
                  },
                  {
                    label: "Uptime",
                    value: "99.9%",
                    icon: "◉",
                    color: "#10b981",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="bg-dark-600 rounded-lg p-3.5 border border-dark-400"
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center text-sm mb-2"
                      style={{ background: m.color + "18", color: m.color }}
                    >
                      {m.icon}
                    </div>
                    <p className="text-sm font-syne font-600 text-white">
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-700 mt-6">
            NexAdmin v2.4 · Built with React + Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
