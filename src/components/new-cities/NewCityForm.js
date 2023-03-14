import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addCity } from '../../store/StoreIndex';
import TextField from '../../shared/TextField';

const NewCityForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => state.admin.token);
    const provinces = useSelector(state => state.admin.provinces);

    const validValues = {
        title: '',
        province: provinces[0]?.id
    };

    const errorSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        province: Yup.string().required('Province is required')
    });

    const loginHandler = (values) => {
        const data = {
            title: values.title,
            provienceId: values.province
        };
        dispatch(addCity(data, token, navigate));
    }

    return (
        <Container>
            <h3 className='mt-3 fw-bold'>Add New City</h3>
            <p>Add City Details</p>
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
                                    <label htmlFor='province' className="form-label">Province</label>
                                    <Field as="select" name="province" className='form-control shadow-none'>
                                        {provinces.length > 0 && provinces.map((province, index) => {
                                            return <option key={index} value={province.id}>{province.title}</option>
                                        })}
                                    </Field>
                                    <ErrorMessage component='small' name="province" className='text-danger fw-bold' />
                                </Col>
                                <div className='text-center'>
                                    <Button type='submit' className='px-5 btn custom-btn'>
                                        Add Cities
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

export default NewCityForm;
