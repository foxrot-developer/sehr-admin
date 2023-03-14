import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addGrade } from '../../store/StoreIndex';
import TextField from '../../shared/TextField';

const AddGradesForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => state.admin.token);

    const validValues = {
        title: '',
        salesTarget: 0,
    };

    const errorSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        salesTarget: Yup.number().required('Sales target is required'),
    });

    const loginHandler = (values) => {
        const data = {
            title: values.title,
            salesTarget: values.salesTarget
        };
        dispatch(addGrade(data, token, navigate));
    }

    return (
        <Container>
            <h3 className='mt-3 fw-bold'>Add Grades</h3>
            <p>Add Grades Details</p>
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
                                    <TextField label='Title' name='title' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <TextField label='Sales Target' name='salesTarget' type='number' />
                                </Col>
                                <div className='text-center'>
                                    <Button type='submit' className='px-5 btn custom-btn'>
                                        Add Grades
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

export default AddGradesForm;