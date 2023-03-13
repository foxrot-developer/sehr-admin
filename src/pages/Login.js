import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import LoginForm from '../components/login/LoginForm';
import '../../src/assets/css/login.css';

const Login = () => {
    return (
        <div className='page-container-new'>
            <Container>
                <div className='form-container'>
                    <Row>
                        <Col xs='12' md='6' className='d-flex align-items-center justify-content-center border-end'>
                            <h1 className='fw-bold'>SEHR ADMIN</h1>
                        </Col>
                        <Col xs='12' md='6'>
                            <LoginForm />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Login;
