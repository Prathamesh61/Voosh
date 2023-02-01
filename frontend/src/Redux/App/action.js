import * as types from "./actionTypes";
import axios from "axios";
const mainURL = 'https://vooshdb.onrender.com'

const getOrder = (id) => (dispatch) => {
  dispatch({ type: types.GET_ORDERS_REQUEST });
  const url = mainURL + `/get-order?user_id=${id}`
  // console.log("changed id", id)
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((r) => {
      return dispatch({
        type: types.GET_ORDERS_SUCCESS,
        payload: r.data.order,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_ORDERS_FAILURE, payload: e });
    });
};

const postOrder = (body) => (dispatch) => {
  dispatch({ type: types.POST_ORDERS_REQUEST });
  const url = mainURL + `/add-order`
  return axios
    .post(url, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((r) => {
      console.log(r.data)
      return dispatch({
        type: types.POST_ORDERS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.POST_ORDERS_FAILURE, payload: e });
    });
};

export { getOrder, postOrder };

