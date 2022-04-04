import React, { useEffect, useState } from 'react';
import InvestMentVsRevenue from '../InvestMentVsRevenue/InvestMentVsRevenue';
import InvestmentVsRevenueBar from '../InvestmentVsRevenueBar/InvestmentVsRevenueBar';
import MonthWiseSell from '../MonthWiseSell/MonthWiseSell';



const Dashboard = () => {

    return (
        <div className='mt-5'>
            <div className="row">
                <MonthWiseSell></MonthWiseSell>
                <InvestMentVsRevenue></InvestMentVsRevenue>
                <InvestmentVsRevenueBar></InvestmentVsRevenueBar>
            </div>
        </div>
    );
};

export default Dashboard;