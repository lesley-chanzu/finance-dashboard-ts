import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const StatisticsPieChart = () => {
    const data = [
        {name: 'Losses', value: 640.46},
        {name: 'Expenses', value: 300.0},
        {name: 'Income', value: 645.0},
        {name: 'Profit', value: 500.0},
    ];

    const COLORS = ['#ff6384', '#36a2eb', '#4bc0c0', '#ffce56'];

  return (
    <div className="bg-[#1e1e2f] p-4 rounded-xl shadow-md w-full">
        <ResponsiveContainer width={"100%"} height={300}>
            <PieChart>
                <Pie 
                data={data}
                dataKey={'value'}
                nameKey={'name'}
                innerRadius={80}
                outerRadius={100}
                paddingAngle={5}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
                {data.map((entry, index) => (
                    <div key={entry.name} className="flex items-center gap-2">
                        <span
                            className="inline-block w-3 h-3 rounded-full"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></span>
                        <span className="text-sm text-white">{entry.name}:</span>
                        <span className="text-sm text-[#b0b8d1]">${entry.value}</span>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default StatisticsPieChart