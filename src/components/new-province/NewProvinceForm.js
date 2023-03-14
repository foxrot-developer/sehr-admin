import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addProvince } from '../../store/StoreIndex';
import TextField from '../../shared/TextField';

const NewProvinceForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => state.admin.token);

    const [blogImages, setBlogImages] = useState('');

    const validValues = {
        title: ''
    };

    const errorSchema = Yup.object().shape({
        title: Yup.string().required('Title is required')
    });

    const loginHandler = (values) => {
        const data = {
            title: values.title
        };
        dispatch(addProvince(data, token, navigate));
    }

    return (
        <Container>
            <h3 className='mt-3 fw-bold'>Add New Province</h3>
            <p>Add Province Details</p>
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

                                <div className='text-center'>
                                    <Button type='submit' className='px-5 btn custom-btn'>
                                        Add Province
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

export default NewProvinceForm;
