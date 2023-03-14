import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import { useNavigate } from 'react-router-dom';
import CityTables from '../components/cities/CityTable'

const Cities = () => {

    const navigate = useNavigate();

    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="City List" subtitle="Manage Cities" btnText="Add New City" onClick={() => navigate('/dashboard/cities/new-City')} />
                        </Row>
                        <Row>
                            <CityTables />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Cities;