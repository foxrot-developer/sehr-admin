import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import { useNavigate } from 'react-router-dom';
import EducationTable from '../components/education/EducationTable';

const Business = () => {

    const navigate = useNavigate();

    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Business" subtitle="Manage Business" btnText="Add Business" onClick={() => navigate('/dashboard/business/add-business')} />
                        </Row>
                        <Row>
                            <EducationTable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Business;
