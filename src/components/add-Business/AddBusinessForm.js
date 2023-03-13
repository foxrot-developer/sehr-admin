import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createBlog } from '../../store/StoreIndex';
import TextField from '../../shared/TextField';

const AddBusinessForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => state.admin.token);

    const [blogImages, setBlogImages] = useState('');

    const validValues = {
        title: '',
        description: '',
        content: '',
    };

    const errorSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        content: Yup.string().required('Content is required')
    });

    const loginHandler = (values) => {
        const data = new FormData();
        data.append('title', values.title);
        data.append('description', values.description);
        data.append('content', values.content);
        if (blogImages) {
            data.append('postMedia', blogImages);
        }
        dispatch(createBlog(data, token, navigate));
    }

    return (
        <Container>
            <h3 className='mt-3 fw-bold'>Add Business</h3>
            <p>Add Business Details</p>
            <Formik
                initialValues={validValues}
                validationSchema={errorSchema}
                onSubmit={loginHandler}
            >
                {(formik) => (
                    <React.Fragment>
                        <Form>
                            <Row>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='BusinessName' name='BusinessName' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='OwnerName' name='OwnerName' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='Email' name='Email' type='email' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='mobile' name='mobile' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='logoMedia' name='logoMedia' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='sehrCode' name='sehrCode' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='lat' name='lat' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='lon' name='lon' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='about' name='about' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='address' name='address' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='tehsil' name='tehsil' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='district' name='district' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='division' name='division' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='province' name='province' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='city' name='city' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='country' name='country' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='category' name='category' type='number' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='grade' name='grade' type='number' />
                                </Col>
                                <div className='text-center'>
                                    <Button type='submit' className='px-5 btn custom-btn'>
                                        Add Business
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </React.Fragment>
                )}
            </Formik>
        </Container>
    )
}

export default AddBusinessForm;