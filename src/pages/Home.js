import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import Dashboard from '../components/home/Dashboard';
import PurchaseSale from '../components/home/PurchaseSale';
import RecentProducts from '../components/home/RecentProducts';
import ExpiredProducts from '../components/home/ExpiredProducts';

const Home = () => {
    return (
        <div className='page-container'>
            <SidebarNav />
            <main className='main-container'>
                <Container fluid>
                    <TopBar />
                    <Row>
                        <Dashboard />
                    </Row>
                    <Row>
                        <Col xs='12' xl='8'>
                            <PurchaseSale />
                        </Col>
                        <Col xs='12' xl='4'>
                            <RecentProducts />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' xl='6'>
                            <ExpiredProducts />
                        </Col>
                        <Col xs='12' xl='6'>
                            <RecentProducts />
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}

export default Home;
