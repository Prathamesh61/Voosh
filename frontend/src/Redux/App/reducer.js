import * as types from "./actionTypes";

const initalState = {
    orders: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_ORDERS_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case types.GET_ORDERS_SUCCESS:
            return { ...state, isLoading: false, isError: false, orders: payload };
        case types.GET_ORDERS_FAILURE:
            return { ...state, isLoading: false, isError: true, orders: [] };

        default:
            return state;
    }
};

export { reducer };
