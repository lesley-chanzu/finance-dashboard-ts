// import { motion } from "framer-motion";
const Dasboard = () => {
  return (
    <div className="min-h-screen bg-[#181f36] flex">
      <aside className="w-64 bg-[#232b4d] text-white flex flex-col py-8 h-full overflow-y-auto">
        {/* LOGO */}
        <h1 className="px-8 font-bold text-2xl mb-8">PayFinance</h1>
        <nav className="space-y-4 flex-1">
          <div className="px-8 py-3 bg-[#1a2040] rounded-lg mx-4 mb-2 font-semibold cursor-pointer">
            Dashboard
          </div>
          <div className="px-8 py-3 mx-4 mb-2 cursor-pointer">
            <span>📄</span> Invoice
          </div>
          <div className="px-8 py-3 mx-4 mb-2 cursor-pointer">
            <span>💬</span> Message
          </div>
          <div className="px-8 py-3 mx-4 mb-2 cursor-pointer">
            <span>⚡</span> Activity
          </div>
          <div className="flex items-center justify-between px-8 py-3 mx-4 mb-2 cursor-pointer">
            <span>
              <span>🔔</span> Notifications
            </span>
            <span className="bg-blue-600 rounded-full px-2">6</span>
          </div>
          <div className="px-8 py-3 mx-4 mb-2 cursor-pointer">
            <span>📊</span> Analytics
          </div>
        </nav>
        {/* SETTINGS */}
          <div className="mb-4 px-8 cursor-pointer">
            <span>⚙️</span> Settings
          </div>
          <div className="flex items-center gap-2 px-8 mb-4 cursor-pointer">
            <span>🌙</span>
            Dark Mode
            <input type="checkbox" className="toggle toggle-sm" />
          </div>
        
      </aside>
    </div>
  );
};

export default Dasboard;
