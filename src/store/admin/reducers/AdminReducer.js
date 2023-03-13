import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLogin: false,
    admin: {},
    token: '',
    blogs: {},
    users: {}
};

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN:
            return {
                ...state,
                isLogin: true,
                token: action.payload
            };
        case actionTypes.ALL_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        case actionTypes.ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        case actionTypes.ADMIN_LOGOUT:
            return {
                isLogin: false,
                admin: {},
                token: '',
                blogs: {},
                users: {}
            };
        default:
            return state;
    }
}

export default AdminReducer;
