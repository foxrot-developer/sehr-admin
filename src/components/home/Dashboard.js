import React from 'react';
import { Col } from 'react-bootstrap';
import { BiPurchaseTag } from 'react-icons/bi';

import DashboardCard from './DashboardCard.js';

const Dashboard = () => {

    const data = [
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#FF9F43' }} />, title: 'Total Users', count: '500' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#28C76F' }} />, title: 'Total Shops', count: '500' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#00CFE8' }} />, title: 'Total Commission', count: '500' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#EA5455' }} />, title: 'Total Stores', count: '500' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#fff' }} />, title: 'Total Users', count: '500', cardColor: '#FF9F43' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#fff' }} />, title: 'Total Shops', count: '500', cardColor: '#317DEE' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#fff' }} />, title: 'Total Commission', count: '500', cardColor: '#E74032' },
        { icon: <BiPurchaseTag className='card-icon' style={{ color: '#fff' }} />, title: 'Total Stores', count: '500', cardColor: '#209040' },
    ];

    return (
        data.map((item, index) => {
            if (item.cardColor) {
                return <Col key={index} xs='12' md='6' xl='3'>
                    <DashboardCard icon={item.icon} title={item.title} count={item.count} cardColor={item.cardColor} />
                </Col>
            }
            else {
                return <Col key={index} xs='12' md='6' xl='3'>
                    <DashboardCard icon={item.icon} title={item.title} count={item.count} />
                </Col>
            }
        })
    )
}

export default Dashboard;
