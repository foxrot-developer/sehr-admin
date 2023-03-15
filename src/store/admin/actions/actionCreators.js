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

export const adminLogout = (navigate) => dispatch => {
    dispatch({
        type: actionTypes.ADMIN_LOGOUT
    });
    navigate('/admin/login');
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
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const createBlog = (data, token, navigate) => dispatch => {
    Axios.post('blog/posts', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllBlogs(token, 1));
            navigate('/dashboard/blogs');
            Toast.success('Blog created successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
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
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
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
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
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
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const getAllProvinces = () => dispatch => {
    Axios.get(`proviences`)
        .then(response => {
            dispatch({
                type: actionTypes.ALL_PROVINCES,
                payload: response.data.province
            });
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const addProvince = (data, token, navigate) => dispatch => {
    Axios.post('proviences', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllProvinces());
            navigate('/dashboard/Provinces');
            Toast.success('Province created successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
}

export const deleteProvince = (id, token) => dispatch => {
    Axios.delete(`proviences/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllProvinces());
            Toast.success('Province deleted successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const getAllCities = () => dispatch => {
    Axios.get('cities')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_CITIES,
                payload: response.data
            });
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const addCity = (data, token, navigate) => dispatch => {
    Axios.post('cities', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllCities());
            navigate('/dashboard/cities');
            Toast.success('City created successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const deleteCity = (id, token) => dispatch => {
    Axios.delete(`cities/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllCities());
            Toast.success('City deleted successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const getAllEducations = () => dispatch => {
    Axios.get('education')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_EDUCATIONS,
                payload: response.data
            });
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const addEducation = (data, token, navigate) => dispatch => {
    Axios.post('education', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllEducations());
            navigate('/dashboard/education');
            Toast.success('Education added successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const deleteEducation = (id, token) => dispatch => {
    Axios.delete(`education/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllEducations());
            Toast.success('Education deleted successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const getAllGrades = () => dispatch => {
    Axios.get('grade')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_GRADES,
                payload: response.data
            });
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const deleteGrade = (id, token) => dispatch => {
    Axios.delete(`grade/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllGrades());
            Toast.success('Grade deleted successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const addGrade = (data, token, navigate) => dispatch => {
    Axios.post('grade', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllEducations());
            navigate('/dashboard/grades');
            Toast.success('Grade added successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const getAllCategories = () => dispatch => {
    Axios.get('category')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_CATEGORIES,
                payload: response.data
            });
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const addCategory = (data, token, navigate) => dispatch => {
    Axios.post('category', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllCategories());
            navigate('/dashboard/categories');
            Toast.success('Category added successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const deleteCategory = (id, token) => dispatch => {
    Axios.delete(`category/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            dispatch(getAllCategories());
            Toast.success('Category deleted successfully');
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};

export const getAllCommissions = () => dispatch => {
    Axios.get('comission')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_COMMISSIONS,
                payload: response.data
            });
        })
        .catch(error => {
            if (error.response.data.message === 401) {
                Toast.error('User session expired login again');
                dispatch(adminLogout());
            }
            Toast.error(error.response.data.message);
        });
};
