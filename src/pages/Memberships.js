import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UsersTable from '../components/users/UsersTable';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';

const Memberships = () => {
    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Memberships List" subtitle="Manage Memberships" btnText="Add New Membership" />
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

export default Memberships;
