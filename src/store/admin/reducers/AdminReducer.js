import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLogin: false,
    admin: {},
    token: '',
    blogs: {},
    users: {},
    provinces: [],
    cities: {},
    educations: {},
    grades: {},
    categories: {},
    commissions: {},
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
        case actionTypes.ALL_PROVINCES:
            return {
                ...state,
                provinces: action.payload
            };
        case actionTypes.ALL_CITIES:
            return {
                ...state,
                cities: action.payload
            };
        case actionTypes.ALL_EDUCATIONS:
            return {
                ...state,
                educations: action.payload
            };
        case actionTypes.ALL_GRADES:
            return {
                ...state,
                grades: action.payload
            };
        case actionTypes.ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case actionTypes.ALL_COMMISSIONS:
            return {
                ...state,
                commissions: action.payload
            };
        case actionTypes.ADMIN_LOGOUT:
            return {
                isLogin: false,
                admin: {},
                token: '',
                blogs: {},
                users: {},
                provinces: [],
                cities: {},
                educations: {},
                grades: {},
                categories: {},
                commissions: {},
            };
        default:
            return state;
    }
}

export default AdminReducer;
