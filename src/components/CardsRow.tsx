const CardsRow = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-5">
      <div className="bg-[#232b4d] rounded-xl p-6 flex flex-col items-start">
        <div className="text-[#4f8cff] text-3xl mb-2">$</div>
        <div className="text-2xl font-bold text-white">$ 52,360.00</div>
        <div className="text-[#b0b8d1] mt-1">Current Balance</div>
      </div>
      <div className="bg-[#232b4d] rounded-xl p-6 flex flex-col items-start">
        <div className="bg-[#2ec4b6] rounded-xl p-6 flex flex-col items-start">
          <div>
            <svg width={24} height={24} fill="none">
              <circle cx={12} cy={12} r={10} stroke="#a259ff" strokeWidth={2} />
            </svg>
          </div>
          <div className="text-2xl font-bold text-white">$22,360.00</div>
          <div className="text=[#b0b8d1] mt-1">Total Profit</div>
        </div>
      </div>
      <div className="bg-[#232b4d] rounded-xl p-6 flex flex-col items-start">
        <div className="bg-[#1da398] bg-opacity-20 rounded-xl p-6 mb-2">
          <div>
            <svg width={24} height={24} fill="none">
              <circle cx={12} cy={12} r={10} stroke="#a259ff" strokeWidth={2} />
            </svg>
          </div>
          <div className="text-2xl font-bold text-white">11,360.00</div>
          <div className="text-[#eff1f7] mt-1">Total Income</div>
        </div>
      </div>
      <div className="bg-[#232b4d] rounded-xl p-6 flex flex-col items-start">
        <div className="bg-[#ff6b6b] bg-opacity-20 rounded-xl p-6 mb-2">
          <svg width="24" height="24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#a254ff" strokeWidth="2" />
          </svg>
        
        <div className="text-2xl font-bold text-white">$12,360.00</div>
        <div className="text-[#eff1f7] mt-1">Total Expenses</div>
        </div>
      </div>
    </div>
  );
};

export default CardsRow;
