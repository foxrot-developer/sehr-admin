import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

import { getAllBlogs, deleteBlog } from '../../store/StoreIndex';

const BlogsTable = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => state.admin.token);
    const blogs = useSelector(state => state.admin.blogs);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        dispatch(getAllBlogs(token, currentPage));
    }, [token, currentPage]);

    useEffect(() => {
        const pages = Math.ceil(blogs.total / 10);
        setTotalPages(pages);
    }, [blogs.total]);

    const pageHandler = page => {
        setCurrentPage(page);
        dispatch(getAllBlogs(token, page));
    };

    return (
        <div className='section-main m-3 px-3 py-4'>
            <Table responsive hover size="sm" className='page-main-table mt-2'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Likes</th>
                        <th>Comments</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.total > 0 && blogs.posts.map((item, index) => (
                        <tr key={index} className='main-row'>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.likes.length}</td>
                            <td>{item.comments.length}</td>
                            <td>
                                <div>
                                    <BsEye className='action-icon eye-icon' />
                                    {/**<CiEdit className='action-icon edit-icon' />**/}
                                    <AiOutlineDelete onClick={() => dispatch(deleteBlog(item.id, token))} className='action-icon delete-icon' />
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

export default BlogsTable;
