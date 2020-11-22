import { GET_QUOTATIONS } from './types';
import axios from 'axios';

export const getQuotations = () => async dispatch => {
    try {
        const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,Ethereum&vs_currencies=usd');
        dispatch({
            type: GET_QUOTATIONS,
            payload: res.data
        })
    } catch (err) {
        console.log('NETWORK_ERROR');
    }
}