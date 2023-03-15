import React from 'react';
import { Container, Row } from 'react-bootstrap';

import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import PageHeader from '../shared/PageHeader';
import CommissionsTable from '../components/commission/CommissionsTable';

const Commission = () => {
    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Commissions List" subtitle="Manage Comissions" btnText="Add New Commission" />
                        </Row>
                        <Row>
                            <CommissionsTable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Commission;
