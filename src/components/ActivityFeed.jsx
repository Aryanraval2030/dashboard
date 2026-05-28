function ActivityFeed() {
  const events = [
    {
      icon: "👤",
      text: "New user registered: Karan Singh",
      time: "Just now",
      color: "#3b82f6",
    },
    {
      icon: "📦",
      text: "Order #8821 marked complete",
      time: "2 min ago",
      color: "#10b981",
    },
    {
      icon: "⚠️",
      text: "Payment failed: ₹4,999 order",
      time: "15 min ago",
      color: "#f59e0b",
    },
    {
      icon: "🚀",
      text: 'Product "UI Kit v3" published',
      time: "1h ago",
      color: "#8b5cf6",
    },
    {
      icon: "💬",
      text: "Support ticket #442 resolved",
      time: "2h ago",
      color: "#14b8a6",
    },
  ];
  return (
    <div
      className="bg-[#111827] border border-[#1e2d4a] stat-border card-glow rounded-xl p-5  bg-dark-700 fade-up"
      style={{ animationDelay: "450ms" }}
    >
      <h3 className="font-syne font-600 text-white text-sm mb-1">
        Live Activity
      </h3>
      <p className="text-xs text-gray-500 mb-4">Real-time events</p>
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
              style={{
                background: e.color + "18",
                border: `1px solid ${e.color}33`,
              }}
            >
              {e.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-300 leading-relaxed">{e.text}</p>
              <p className="text-xs text-gray-600 mt-0.5">{e.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
