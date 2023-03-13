import React from 'react';
import { Table } from 'react-bootstrap';

import '../../assets/css/recent-products.css';

const RecentProducts = () => {

    /* Creating an array of objects. */
    const data = [
        { name: 'John', age: 20 },
        { name: 'John', age: 20 },
        { name: 'John', age: 20 },
        { name: 'John', age: 20 },
        { name: 'John', age: 20 },
    ];

    return (
        <div className='section-main'>
            <h4 className='section-title'>Recent Commissions</h4>
            <Table responsive hover size="sm" className='recent-products-table mt-2'>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default RecentProducts;
