import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import { useNavigate } from 'react-router-dom';
import Provincetable from '../components/provinces/Provincetable.js'

const Provinces = () => {

    const navigate = useNavigate();

    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Province List" subtitle="Manage Provinces" btnText="Add New Province" onClick={() => navigate('/dashboard/provinces/new-province')} />
                        </Row>
                        <Row>
                            <Provincetable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Provinces;