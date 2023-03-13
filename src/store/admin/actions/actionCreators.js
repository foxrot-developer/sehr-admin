import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

export const adminLogin = (data, navigation) => dispatch => {
    Axios.post('auth/login', data)
        .then(response => {
            dispatch({
                type: actionTypes.ADMIN_LOGIN,
                payload: response.data.accessToken
            });
            navigation('/');
            Toast.success(response.data.message);
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const getAllBlogs = (token, page) => dispatch => {
    Axios.get(`blog/posts?page=${page}&limit=10`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch({
                type: actionTypes.ALL_BLOGS,
                payload: response.data
            });
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const createBlog = (data, token, navigate) => dispatch => {
    Axios.post('blog/posts', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            console.log(response.data);
            dispatch(getAllBlogs(token, 1));
            navigate('/dashboard/blogs');
            Toast.success('Blog created successfully');
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const deleteBlog = (id, token) => dispatch => {
    Axios.delete(`blog/posts/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllBlogs(token, 1));
            Toast.success('Blog deleted successfully');
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const getAllUsers = (token, page) => dispatch => {
    Axios.get(`user?page=${page}&limit=10`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch({
                type: actionTypes.ALL_USERS,
                payload: response.data
            });
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};

export const deleteUser = (id, token) => dispatch => {
    Axios.delete(`user/${id}/delete`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllUsers(token, 1));
            Toast.success('User deleted successfully');
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};