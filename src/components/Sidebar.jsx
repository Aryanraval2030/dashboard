function Sidebar({ active, setActive, navItems, sidebarOpen, setSidebarOpen }) {
  return (
    <aside
  className={`
    bg-[#111827] border border-[#1e2d4a]
    fixed left-0 top-0 z-50
    h-screen w-[260px]
    flex flex-col
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}

    >
      {" "}
      <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-white text-2xl"
        >
          ✕
        </button>
      </div>
      <div className="px-5 py-5 border-b  border-dark-400">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
          >
            N
          </div>
          <span className="font-syne font-700 text-white tracking-wide text-[18px] text-sm">
            NexAdmin
          </span>
          <span
            className="tag ml-auto"
            style={{ background: "#1e3a5f", color: "#93c5fd" }}
          >
            Pro
          </span>
        </div>
      </div>
      <div className="px-3 pt-4 flex-1 overflow-y-auto">
        <p className="text-xs text-gray-600 font-500 px-3 mb-2 tracking-widest uppercase">
          Main Menu
        </p>
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`sidebar-item w-full flex items-center gap-3 px-4 py-2.5 rounded-lg mb-0.5 text-left ${active === i ? "active text-white" : "text-gray-500 hover:text-gray-300"}`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-sm font-400">{item.label}</span>
            {item.badge && (
              <span className="ml-auto text-xs bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="p-4 border-t border-dark-400">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-600">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-500 truncate">Admin User</p>
            <p className="text-gray-600 text-xs truncate">admin@nexadmin.io</p>
          </div>
          <span className="text-gray-600 text-xs">⋯</span>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
