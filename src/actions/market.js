import { GET_MARKET } from './types';
import axios from 'axios';

const currencies = ['bitcoin', 'ethereum'];

export const getMarket = () => async dispatch => {
    try {
        let promiseArray = [];
        currencies.map(curr => {
            promiseArray.push(axios.get(`https://api.coingecko.com/api/v3/coins/${curr}/market_chart?vs_currency=usd&days=14&interval=daily`));
        });
        Promise.all(promiseArray).then(values => {
            dispatch({
                type: GET_MARKET,
                payload: values
            })
        })
    } catch (err) {
        console.log('NETWORK_ERROR');
    }
}
