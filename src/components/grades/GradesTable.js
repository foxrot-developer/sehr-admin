import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { getAllGrades, deleteGrade } from '../../store/StoreIndex';

const GradesTable = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => state.admin.token);
    const grades = useSelector(state => state.admin.grades);

    useEffect(() => {
        dispatch(getAllGrades());
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
                    {grades.total > 0 && grades.grade.map((item, index) => (
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

export default GradesTable;