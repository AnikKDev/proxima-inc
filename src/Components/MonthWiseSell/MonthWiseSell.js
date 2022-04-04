import React, { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MonthWiseSell = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className='col-md-4'>
            <h5 className='text-center mb-5 text-primary'>Month Wise Sell</h5>
            <LineChart width={370} height={250} data={data}>
                <Line type="monotone" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} dataKey={'sell'}></Line>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend />
            </LineChart>
        </div>
    );

};

export default MonthWiseSell;