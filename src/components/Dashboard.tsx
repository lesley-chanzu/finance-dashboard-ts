// import { motion } from "framer-motion";
const Dasboard = () => {
  return (
    <div className="min-h-screen bg-[#181f36] flex">
      <aside className="w-64 bg-[#232b4d] text-white flex flex-col py-8">
        {/* LOGO */}
        <h1 className="px-8 font-bold text-2xl mb-8">PayFinance</h1>
        <nav className="space-y-4 flex-1">
          <div className="px-8 py-3 bg-[#1a2040] rounded-lg mx-4 mb-2 font-semibold">
            Dashboard
          </div>
          <div className="px-8 py-3 mx-4 mb-2">
            <span>📄</span> Invoice
          </div>
          <div className="px-8 py-3 mx-4 mb-2">
            <span>💬</span> Message
          </div>
          <div className="px-8 py-3 mx-4 mb-2">
            <span>⚡</span> Activity
          </div>
          <div className="flex items-center justify-between px-8 py-3 mx-4 mb-2">
            <span>
              <span>🔔</span> Notifications
            </span>
            <span className="bg-blue-600 rounded-full px-2">6</span>
          </div>
          <div className="px-8 py-3 mx-4 mb-2">
            <span>📊</span> Analytics
          </div>
        </nav>
        <div className="mt-auto">
          <div className="mb-4">
            <span>⚙️</span> Settings
          </div>
          <div className="flex items-center gap-2">
            <span>🌙</span>
            Dark Mode
            <input type="checkbox" className="toggle toggle-sm" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dasboard;
