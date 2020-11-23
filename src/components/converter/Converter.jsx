import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConverterChart from './ConverterChart';
import ConverterForm from './ConverterForm';

const Converter = ({ market, quotation }) => {
    return (
        <div className="container">
            <div className="content">
                <div className="flex">
                    <div className="main-text xl">
                        Конвертер.
                    </div>
                </div>

                {(market.loading || quotation.loading) ? 'Загрузка...' : <div className='flex fd-column al-it-center'>
                    <ConverterForm quotation={quotation}/>
                    {Object.entries(market.prices).map(price => <ConverterChart key={price[0]} currency={price[0]} prices={price[1]}/>)}    
                </div>}
            </div>
        </div>
    );
}

Converter.propTypes = {
    quotation: PropTypes.object.isRequired,
    market: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    quotation: state.quotation,
    market: state.market
})

export default connect(mapStateToProps)(Converter);
