import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import CategoriesTable from '../components/categories/CategoriesTable';

const Categories = () => {

    const navigate = useNavigate();

    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Categories List" subtitle="Manage Categories" btnText="Add New Category" onClick={() => navigate('/dashboard/categories/new-category')} />
                        </Row>
                        <Row>
                            <CategoriesTable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Categories;
