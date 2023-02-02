import * as types from "./actionTypes";
import axios from "axios";
const mainURL = 'https://vooshdb.onrender.com'
const loginUser = (body) => (dispatch) => {
    dispatch({ type: types.GET_LOGIN_USER_REQUEST });
    const url = mainURL + `/login-user`
    // console.log("changed id", id)
    return axios
        .post(url, body)
        .then((r) => {
            // console.log("login", r.data)
            localStorage.setItem("token", r.data.token);
            localStorage.setItem("user", JSON.stringify(r.data.user));
            return dispatch({
                type: types.GET_LOGIN_USER_SUCCESS,
                payload: r.data,
            });
        })
        .catch((e) => {
            return dispatch({ type: types.GET_LOGIN_USER_FAILURE, payload: e });
        });
};

const signupUser = (body) => (dispatch) => {
    dispatch({ type: types.GET_SIGNUP_USER_REQUEST });
    const url = mainURL + `/add-user`
    console.log(url)
    return axios
        .post(url, body)
        .then((r) => {
            // console.log("signup", r.data);
            return dispatch({
                type: types.GET_SIGNUP_USER_SUCCESS,
            });
        })
        .catch((e) => {
            return dispatch({ type: types.GET_SIGNUP_USER_FAILURE });
        });
};
const logout = () => (dispatch) => {
    dispatch({ type: types.LOGOUT_USER });
}

export { loginUser, signupUser, logout };

