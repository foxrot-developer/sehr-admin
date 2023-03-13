import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createBlog } from '../../store/StoreIndex';
import TextField from '../../shared/TextField';

const NewBlogForm = () => {

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
            <h3 className='mt-3 fw-bold'>Add New Blog</h3>
            <p>Add Blog Details</p>
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
                                    <TextField label='Description' name='description' type='text' />
                                </Col>
                                <Col xs='12' md='6' lg='4'>
                                    <label>Blog Images (optional)</label>
                                    <input type='file' className='mt-2' onChange={e => setBlogImages(e.target.files[0])} />
                                </Col>
                                <Col xs='12'>
                                    <TextField textarea label='Content' name='content' type='text' />
                                </Col>
                                <div className='text-center'>
                                    <Button type='submit' className='px-5 btn custom-btn'>
                                        Create Blog
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

export default NewBlogForm;
