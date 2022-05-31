import React from "react";
import { BarChart, Bar,  XAxis,  Tooltip, Pie, PieChart } from 'recharts';
import "./Dashboard.css";

const Home = () => {
    const data = [
    {
        name: "Discord",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "instagram",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "twitter",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "tiktok ",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Facebook",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Whatsapp",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Telegram",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
    ];

    const data01 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ];
      const data02 = [
        { name: "A1", value: 100 },
        { name: "A2", value: 300 },
        { name: "B1", value: 100 },
        { name: "B2", value: 80 },
        { name: "B3", value: 40 },
        { name: "B4", value: 30 },
        { name: "B5", value: 50 },
        { name: "C1", value: 100 },
        { name: "C2", value: 200 },
        { name: "D1", value: 150 },
        { name: "D2", value: 50 }
      ];


return (
    <div className="charts">
        <h5>Number of Social Media Followers <br /> 20,000</h5>
        <BarChart className="bar-charts" width={300} height={300} data={data}>
            
            <XAxis dataKey="name" />
            {/* <YAxis />  */}
            <Tooltip  />
            {/* <Legend />  */}
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>

        <PieChart className="bar-charts" width={400} height={400}>
            <Pie
                data={data01}
                dataKey="value"
                cx={200}
                cy={200}
                outerRadius={60}
                fill="#8884d8"
            />
            <Pie
                data={data02}
                dataKey="value"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
            />
        </PieChart>
    </div>
    
  );
}

  


export default Home