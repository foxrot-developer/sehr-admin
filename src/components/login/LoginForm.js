import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TextField from '../../shared/TextField';
import { adminLogin } from '../../store/StoreIndex';

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (values) => {
        const data = {
            username: values.email,
            password: values.password
        };
        dispatch(adminLogin(data, navigate));
    }

    return (
        <Formik
            initialValues={validValues}
            validationSchema={errorSchema}
            onSubmit={loginHandler}
        >
            {(formik) => (
                <React.Fragment>
                    <Form>
                        <TextField label='Username' name='email' type='text' />
                        <TextField label='Password' name='password' type='password' />
                        <div className='text-center'>
                            <Button type='submit' className='px-5 btn custom-btn'>
                                Login
                            </Button>
                        </div>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default LoginForm;
