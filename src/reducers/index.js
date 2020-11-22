import { combineReducers } from 'redux';
import quotation from './quotation';
import balance from './balance';
import market from './market';

export default combineReducers({
    quotation,
    balance,
    market
});