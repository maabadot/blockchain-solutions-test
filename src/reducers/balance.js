import {
    GET_BALANCE,
    SET_BALANCE
} from '../actions/types';

const initialState = {
    balance: {
        USD: null,
        BTC: null,
        ETH: null
    },
    loading: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_BALANCE:
            return {
                balance: payload,
                loading: false
            }
        case SET_BALANCE:
            return {
                balance: {
                    ...state.balance,
                    [payload.currency]: payload.balance
                },
                loading: false
            }
        default:
            return state;
    }
}