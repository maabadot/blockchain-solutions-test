import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setBalance } from '../../actions/balance';
import { connect } from 'react-redux';

const PortfolioCurrency = ({ setBalance, currency, balance }) => {

    const [formData, setFormData] = useState({
       add: '',
       remove: ''
    });

    const { add, remove } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="currency-box">
            <div className="currency">{balance}{currency}</div>
            <div className="form-handler">
                <div className="">
                    <input name="add" type="number" placeholder="Заработал" value={add} onChange={e => onChange(e)}/>
                </div>
                <button name="addBtn" className="btn" onClick={e => {
                    if (add !== '')
                        setBalance(currency, (balance + parseFloat(add)))}
                }><i className="fas fa-plus fa-3x"></i></button>
            </div>
            <div className="form-handler">
                <div className="">
                    <input name="remove" type="number" placeholder="Потратил" value={remove} onChange={e => onChange(e)}/>
                </div>
                <button name="removeBtn" className="btn" onClick={e => {
                    if (remove !== '')
                        setBalance(currency, (balance - parseFloat(remove)))}
                }><i className="fas fa-minus fa-3x"></i></button>
            </div>
        </div>
    );
}

PortfolioCurrency.propTypes = {
    setBalance: PropTypes.func.isRequired
}

export default connect(null, { setBalance })(PortfolioCurrency);