import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import { useNavigate } from 'react-router-dom';
import GradesTable from '../components/grades/GradesTable';

const Grades = () => {

    const navigate = useNavigate();

    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Grade List" subtitle="Manage Grades" btnText="Add New Grade" onClick={() => navigate('/dashboard/grades/add-grades')} />
                        </Row>
                        <Row>
                            <GradesTable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Grades;