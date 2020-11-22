import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ConverterChart = ({ currency, price }) => {
    return (
        <div>
            {currency}
            {price}
        </div>
    );
}

ConverterChart.propTypes = {};

export default ConverterChart;
