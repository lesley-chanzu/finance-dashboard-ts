// import { motion } from "framer-motion";
import { Bell, UserCircle } from "lucide-react";

const Dasboard = () => {
  return (
    <div className="h-screen bg-[#181f36] flex">
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

      {/* MAIN CONTENT */}
      <main className="flex flex-1 flex-col px-8 py-6 bg-[#181f36] text-white">
        {/* top bar */}
        <div className="flex items-center mb-8">
          <div>
            <div className="text-2xl font-semibold text-white">
              Hello Lescorp
            </div>
            <div className="text-base text-[#b0b8d1]">Welcome Back</div>
          </div>
          <div className="flex-1" />
          <input
            type="text"
            className="bg-[#232b4d] border-none rounded-lg px-6 py-3 text-white w-80 mr-6outline-none"
            placeholder="Search Transaction"
          />
          <button className="bg-[#232b4d] border-none rounded-full w-10 h-10 flex items-center justify-center text-white text-xl mr-4 ml-2">
            <Bell />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#b0b8d1] text-xl border-none flex items-center justify-center text-white">
            <UserCircle />
          </div>
        </div>

        {/* CARDS DISPLAY */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-[#232b4d] p-6 rounded-xl flex flex-col items-start">
            <div className="text-[#4f8cff] text-3xl mb-2">$</div>
            <div className="text-2xl font-bold text-white">$2,360.00</div>
            <div className="text-[#b0b8d1] mt-1">Current Balance</div>
          </div>
          <div className="bg-[#232b4d] rounded-xl p-6 flex flex-col items-start">
            <div className="bg-[#2ec4b6] bg-opacity-20 rounded-full p-2 mb-2">
              <svg width="24" height="24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#2ec4b6"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dasboard;
