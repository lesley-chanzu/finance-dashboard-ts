import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const StatisticsPieChart = () => {
    const data = [
        {name: 'Red', value: 640.46},
        {name: 'Blue', value: 300.0},
        {name: 'Green', value: 645.0},
        {name: 'Yellow', value: 500.0},
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
    </div>
  )
}

export default StatisticsPieChart