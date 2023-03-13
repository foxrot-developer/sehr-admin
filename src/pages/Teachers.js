import React from 'react';
import { Container, Row } from 'react-bootstrap';

import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import PageHeader from '../shared/PageHeader';
import UsersTable from '../components/users/UsersTable';

const Teachers = () => {
    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Teachers List" subtitle="Manage Teachers" btnText="Add New Teacher" />
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

export default Teachers;
