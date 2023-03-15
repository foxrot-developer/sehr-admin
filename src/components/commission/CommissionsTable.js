import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCommissions, deleteGrade } from '../../store/StoreIndex';

const CommissionsTable = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => state.admin.token);
    const commissions = useSelector(state => state.admin.commissions);

    useEffect(() => {
        dispatch(getAllCommissions());
    }, []);

    return (
        <div className='section-main m-3 px-3 py-4'>
            <Table responsive hover size="sm" className='page-main-table mt-2'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Sales Target</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {commissions.total > 0 && commissions.comission.map((item, index) => (
                        <tr key={index} className='main-row'>
                            <td>{item.title}</td>
                            <td>{item.salesTarget}</td>
                            <td>
                                <div>
                                    {/**<CiEdit className='action-icon edit-icon' />**/}
                                    <AiOutlineDelete onClick={() => dispatch(deleteGrade(item.id, token))} className='action-icon delete-icon' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CommissionsTable;
