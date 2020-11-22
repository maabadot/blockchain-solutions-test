import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConverterChart from './ConverterChart';

const Converter = ({ market: { loading, prices } }) => {
    return (
        <div className="container">
            <div className="content">
                <div className="flex">
                    <div className="main-text xl">
                        Конвертер.
                    </div>
                </div>
                <div>
                    {loading ? 'Загрузка...' : Object.entries(prices).map(price => <ConverterChart currency={price[0]} price={price[1]}/>)}
                </div>
            </div>
        </div>
    );
}

Converter.propTypes = {
    market: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    market: state.market
})

export default connect(mapStateToProps)(Converter);
