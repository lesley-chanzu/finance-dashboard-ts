import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const MonthlyLineChart = () => {
  const data = [
    { month: "Jan", income: 5000, expenses: 3000 },
    { month: "Feb", income: 6000, expenses: 8000 },
    { month: "Mar", income: 7000, expenses: 3500 },
    { month: "Apr", income: 8000, expenses: 4500 },
    { month: "May", income: 9000, expenses: 5000 },
    { month: "Jun", income: 7000, expenses: 5500 },
    { month: "Jul", income: 11000, expenses: 6000 },
    { month: "Aug", income: 12000, expenses: 4500 },
    { month: "Sep", income: 13000, expenses: 7000 },
    { month: "Oct", income: 19000, expenses: 7500 },
    { month: "Nov", income: 16000, expenses: 8000 },
    { month: "Dec", income: 16000, expenses: 8500 },
  ];

  return (
    <div className="bg-[#1e1e2f] p-4 rounded-xl shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333"/>
            <XAxis dataKey='month' stroke="#888" />
            <YAxis stroke="#888"/>
            <Tooltip contentStyle={{ backgroundColor: '#1e1e2f', borderColor: '#333' }} />
            <Line type="monotone" dataKey='income' stroke="#4f46ef" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey='expenses' stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyLineChart;
