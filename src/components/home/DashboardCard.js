import React from 'react';

import '../../assets/css/dashboard-card.css';

const DashboardCard = ({ icon, title, count, cardColor }) => {
    if (cardColor) {
        return (
            <div className='card-body' style={{ backgroundColor: `${cardColor}` }}>
                <div>
                    <h4 className='card-count text-light'>{count}</h4>
                    <h4 className='card-title text-light'>{title}</h4>
                </div>
                {icon}
            </div>
        )
    } else {
        return (
            <div className='card-body'>
                {icon}
                <div>
                    <h4 className='card-count'>{count}</h4>
                    <h4 className='card-title'>{title}</h4>
                </div>
            </div>
        )
    }
}

export default DashboardCard;
