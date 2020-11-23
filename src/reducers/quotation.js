import {GET_QUOTATIONS} from "../actions/types";

const initialState = {
    BTC: null,
    ETH: null,
    USD: 1,
    loading: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_QUOTATIONS:
            return {
                BTC: payload.bitcoin.usd,
                ETH: payload.ethereum.usd,
                USD: 1,
                loading: false
            }
        default:
            return state;
    }
}