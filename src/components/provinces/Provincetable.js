import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProvinces, deleteProvince } from '../../store/StoreIndex';

const Provincetable = () => {

    const dispatch = useDispatch();

    const provinces = useSelector(state => state.admin.provinces);
    const token = useSelector(state => state.admin.token);

    useEffect(() => {
        dispatch(getAllProvinces());
    }, []);

    return (
        <div className='section-main m-3 px-3 py-4'>
            <Table responsive hover size="sm" className='page-main-table mt-2'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {provinces.length > 0 && provinces.map((item, index) => (
                        <tr key={index} className='main-row'>
                            <td>{item.title}</td>
                            <td>
                                <div>
                                    {/**<CiEdit className='action-icon edit-icon' />**/}
                                    <AiOutlineDelete onClick={() => dispatch(deleteProvince(item.id, token))} className='action-icon delete-icon' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Provincetable;