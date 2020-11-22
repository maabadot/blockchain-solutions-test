import { GET_MARKET } from '../actions/types';

const initialState = {
    prices: {
        BTC: null,
        ETH: null
    },
    loading: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_MARKET:
            return {
                prices: {
                    BTC: payload[0].data.prices,
                    ETH: payload[1].data.prices
                },
                loading: false
            }
        default:
            return state;
    }
}