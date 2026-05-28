export const navItems = [
  { icon: "⊞", label: "Dashboard", active: true },
  { icon: "◈", label: "Analytics" },
  { icon: "⬡", label: "Users", badge: 24 },
  { icon: "◇", label: "Orders", badge: 8 },
  { icon: "▣", label: "Products" },
  { icon: "◎", label: "Reports" },
  { icon: "⬢", label: "Marketing" },
  { icon: "◉", label: "Settings" },
];

export const COLORS = {
  blue: "#3b82f6",
  green: "#10b981",
  amber: "#f59e0b",
  red: "#ef4444",
  purple: "#8b5cf6",
  teal: "#14b8a6",
};

export const stats = [
  {
    label: "Total Revenue",
    value: "₹84,29,500",
    change: "+18.4%",
    up: true,
    color: COLORS.blue,
    icon: "₹",
    sub: "vs last month",
  },
  {
    label: "Active Users",
    value: "12,847",
    change: "+6.2%",
    up: true,
    color: COLORS.green,
    icon: "👤",
    sub: "online now: 432",
  },
  {
    label: "New Orders",
    value: "3,291",
    change: "+11.7%",
    up: true,
    color: COLORS.purple,
    icon: "📦",
    sub: "pending: 148",
  },
  {
    label: "Churn Rate",
    value: "2.4%",
    change: "-0.8%",
    up: false,
    color: COLORS.red,
    icon: "⚡",
    sub: "industry avg: 5.2%",
  },
];

export const chartData = [
  { month: "Jan", rev: 42, users: 28 },
  { month: "Feb", rev: 58, users: 34 },
  { month: "Mar", rev: 51, users: 30 },
  { month: "Apr", rev: 70, users: 45 },
  { month: "May", rev: 65, users: 41 },
  { month: "Jun", rev: 88, users: 56 },
  { month: "Jul", rev: 75, users: 48 },
  { month: "Aug", rev: 92, users: 62 },
  { month: "Sep", rev: 84, users: 58 },
  { month: "Oct", rev: 97, users: 70 },
  { month: "Nov", rev: 89, users: 64 },
  { month: "Dec", rev: 100, users: 75 },
];

export const orders = [
  {
    id: "#ORD-8821",
    product: "Pro License Bundle",
    user: "Rahul Sharma",
    amount: "₹12,999",
    status: "Completed",
    time: "2m ago",
  },
  {
    id: "#ORD-8820",
    product: "SaaS Dashboard Kit",
    user: "Priya Mehta",
    amount: "₹4,499",
    status: "Processing",
    time: "18m ago",
  },
  {
    id: "#ORD-8820",
    product: "SaaS Dashboard Kit",
    user: "Priya Mehta",
    amount: "₹4,499",
    status: "Processing",
    time: "18m ago",
  },
  {
    id: "#ORD-8819",
    product: "UI Component Pack",
    user: "Arjun Verma",
    amount: "₹2,199",
    status: "Completed",
    time: "1h ago",
  },
  {
    id: "#ORD-8818",
    product: "Admin Template Pro",
    user: "Sneha Patel",
    amount: "₹8,999",
    status: "Pending",
    time: "2h ago",
  },
  {
    id: "#ORD-8817",
    product: "Analytics Plugin",
    user: "Vikram Nair",
    amount: "₹3,499",
    status: "Refunded",
    time: "5h ago",
  },
];

export const topProducts = [
  { name: "Admin Dashboard Pro", sales: 1284, rev: "₹57.8L", pct: 89 },
  { name: "SaaS UI Kit", sales: 946, rev: "₹42.1L", pct: 72 },
  { name: "Component Library", sales: 731, rev: "₹32.0L", pct: 58 },
  { name: "Landing Page Pack", sales: 512, rev: "₹22.4L", pct: 41 },
];

export const statusColors = {
  Completed: "text-emerald-400 bg-emerald-400/10",
  Processing: "text-blue-400 bg-blue-400/10",
  Pending: "text-amber-400 bg-amber-400/10",
  Refunded: "text-red-400 bg-red-400/10",
};
