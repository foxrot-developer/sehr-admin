import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCities, getAllProvinces, deleteCity } from '../../store/StoreIndex';

const CityTable = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => state.admin.token);
    const cities = useSelector(state => state.admin.cities);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        dispatch(getAllCities(token, currentPage));
        dispatch(getAllProvinces());
    }, [token, currentPage]);

    useEffect(() => {
        const pages = Math.ceil(cities.total / 10);
        setTotalPages(pages);
    }, [cities.total]);

    const pageHandler = page => {
        setCurrentPage(page);
        dispatch(getAllCities(token, page));
    };

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
                    {cities.total > 0 && cities.cities.map((item, index) => (
                        <tr key={index} className='main-row'>
                            <td>{item.title}</td>
                            <td>
                                <div>
                                    {/**<BsEye className='action-icon eye-icon' />**/}
                                    {/**<CiEdit className='action-icon edit-icon' />**/}
                                    <AiOutlineDelete onClick={() => dispatch(deleteCity(item.id, token))} className='action-icon delete-icon' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {cities.total > 0 && <div className='d-flex justify-content-end'>
                {currentPage !== 1 && <Button className='me-2' onClick={() => pageHandler(currentPage - 1)}>Previous</Button>}
                {currentPage !== totalPages && <Button onClick={() => pageHandler(currentPage + 1)}>Next</Button>}
            </div>}
        </div>
    )
}

export default CityTable;