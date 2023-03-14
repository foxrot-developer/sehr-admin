import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCategories, deleteCategory } from '../../store/StoreIndex';

const CategoriesTable = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => state.admin.token);
    const categories = useSelector(state => state.admin.categories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    return (
        <div className='section-main m-3 px-3 py-4'>
            <Table responsive hover size="sm" className='page-main-table mt-2'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.total > 0 && categories.categories.map((item, index) => (
                        <tr key={index} className='main-row'>
                            <td>{item.title}</td>
                            <td>
                                <div>
                                    {/**<CiEdit className='action-icon edit-icon' />**/}
                                    <AiOutlineDelete onClick={() => dispatch(deleteCategory(item.id, token))} className='action-icon delete-icon' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CategoriesTable;
