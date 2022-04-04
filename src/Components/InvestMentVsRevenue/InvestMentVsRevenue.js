import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const InvestMentVsRevenue = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className="col-md-4">
            <h5 className='text-center mb-5 text-primary'>Investment VS Revenue</h5>
            <AreaChart width={370} height={250}
                data={data}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />

                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <YAxis />
                <Tooltip />
                <Legend />
            </AreaChart>
        </div>
    );
};

export default InvestMentVsRevenue;