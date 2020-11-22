import {
    GET_BALANCE,
    SET_BALANCE
} from './types';

export const getBalance = () => async dispatch => {

    const initialState = {
        USD: 0,
        BTC: 0,
        ETH: 0
    }

    let balance = localStorage.getItem('balance');

    if (balance == null) {
        balance = initialState;
        localStorage.setItem('balance', JSON.stringify(balance))
    } else {
        balance = JSON.parse(balance);
    }

    dispatch({
        type: GET_BALANCE,
        payload: balance
    })
}

export const setBalance = (currency, balance) => async dispatch => {
    let storageBalance = JSON.parse(localStorage.getItem('balance'));
    storageBalance[currency] = balance;
    localStorage.setItem('balance', JSON.stringify(storageBalance));

    dispatch({
        type: SET_BALANCE,
        payload: {
            currency,
            balance
        }
    })
}