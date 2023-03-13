import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UsersTable from '../components/users/UsersTable';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';

const Categories = () => {
    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Categories List" subtitle="Manage Categories" btnText="Add New Category" />
                        </Row>
                        <Row>
                            <UsersTable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Categories;
