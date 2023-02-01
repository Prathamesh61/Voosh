import * as types from "./actionTypes";

const initalState = {
    isAuth: false,
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_LOGIN_USER_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case types.GET_LOGIN_USER_SUCCESS:
            localStorage.setItem("token", payload.token);
            JSON.parse(localStorage.setItem("user", JSON.stringify(payload.user)));
            return { ...state, isLoading: false, isError: false, user: payload, isAuth: true, token: localStorage.getItem('token'), user: JSON.parse(localStorage.getItem("user")) };
        case types.GET_LOGIN_USER_FAILURE:
            return { ...state, isLoading: false, isError: true, user: {}, isAuth: false, token: '' };

        case types.GET_SIGNUP_USER_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case types.GET_SIGNUP_USER_SUCCESS:
            return { ...state, isLoading: false, isError: false };
        case types.GET_SIGNUP_USER_FAILURE:
            return { ...state, isLoading: false, isError: true };

        case types.LOGOUT_USER:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return { ...state, isLoading: false, isError: false, isAuth: false, token: '' };

        default:
            return state;
    }
};

export { reducer };
