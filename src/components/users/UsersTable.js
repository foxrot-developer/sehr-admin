import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/users-table.css';
import { getAllUsers, deleteUser } from '../../store/StoreIndex';

function UsersTable() {

    const dispatch = useDispatch();

    const token = useSelector(state => state.admin.token);
    const users = useSelector(state => state.admin.users);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        dispatch(getAllUsers(token, currentPage));
    }, [token, currentPage]);

    useEffect(() => {
        const pages = Math.ceil(users.total / 10);
        setTotalPages(pages);
    }, [users.total]);

    const pageHandler = page => {
        setCurrentPage(page);
        dispatch(getAllUsers(token, page));
    };

    return (
        <div className='section-main m-3 px-3 py-4'>
            <Table responsive hover size="sm" className='page-main-table mt-2'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.total > 0 && users.users.map((item, index) => (
                        <tr key={index} className='main-row'>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>
                                <div>
                                    <BsEye className='action-icon eye-icon' />
                                    {/**<CiEdit className='action-icon edit-icon' />**/}
                                    <AiOutlineDelete onClick={() => dispatch(deleteUser(item.id, token))} className='action-icon delete-icon' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='d-flex justify-content-end'>
                {currentPage !== 1 && <Button className='me-2' onClick={() => pageHandler(currentPage - 1)}>Previous</Button>}
                {currentPage !== totalPages && <Button onClick={() => pageHandler(currentPage + 1)}>Next</Button>}
            </div>
        </div>
    )
}

export default UsersTable
