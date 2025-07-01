import { UserCircleIcon } from "lucide-react";
import { PiBellBold } from "react-icons/pi";
import CardsRow from "./CardsRow";
import MonthlyLineChart from "./MonthlyLineChart";
import StatisticsPieChart from "./StatisticsPieChart";

const MainContent = () => {
  return (
    <main className="flex flex-1 flex-col px-8 py-6 bg-[#181f36] text-white">
      {/* TOP BAR */}
      <div className="flex items-center mb-8">
        <div>
          <div className="text-2xl font-semibold text-white">Hello Lescorp</div>
          <div className="text-[#b0b8d1] text-base">Welcome Back</div>
        </div>
        <div className="flex-1" />
        <input
          type="text"
          className="bg-[#232b4d] border-none rounded-lg px-6 py-3 text-white w-80 mr-6 outline-none"
          placeholder="Search Transaction"
        />
        <button className="bg-[#232b4d] border-none rounded-full w-10 h-10 flex items-center justify-center text-white text-xl mr-4 ml-2">
          <PiBellBold />
        </button>
        <div className="w-10 h-10 rounded-full bg-[#b0b8d1] text-xl border-none flex items-center justify-center text-white">
          <UserCircleIcon />
        </div>
      </div>

      {/* CARDS ROW */}

      <CardsRow />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#121223] text-white rounded-xl shadow-md">
        <div className="md:col-span-2">
      <MonthlyLineChart />
      </div>
      <StatisticsPieChart />
      </div>
    </main>
  );
};

export default MainContent;
