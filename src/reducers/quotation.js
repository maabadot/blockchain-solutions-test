import {GET_QUOTATIONS} from "../actions/types";

const initialState = {
    BTC: null,
    ETH: null,
    loading: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_QUOTATIONS:
            return {
                BTC: payload.bitcoin.usd,
                ETH: payload.ethereum.usd,
                loading: false
            }
            break;
        default:
            return state;
    }
}