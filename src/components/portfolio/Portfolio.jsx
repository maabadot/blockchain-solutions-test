import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import PortfolioCurrency from './PortfolioCurrency';
import { getBalance } from '../../actions/balance';
import { connect } from 'react-redux';
import PortfolioChart from './PortfolioChart';

const Portfolio = ({ getBalance, quotation, balance: { balance } }) => {

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="content">
                    <div className="flex">
                        <div className="main-text xl">
                            Ваш портфель.
                        </div>
                        <div className="main-text m">
                            Баланс: {quotation.loading ? 'Загрузка...' : `${Math.round((balance.USD + 
                            (quotation.BTC * balance.BTC) + 
                            (quotation.ETH * balance.ETH)) * 100) / 100}USD`}
                        </div>
                    </div>
                    <div className="flex my-2">
                        {Object.entries(balance).map(currency => <PortfolioCurrency key={currency[0]} currency={currency[0]} balance={currency[1]}/>)}
                    </div>
                    {quotation.loading ? 'Загрузка...' :
                        <PortfolioChart className="my-2" balance={balance} quotation={quotation}/>
                    }

                </div>
            </div>
        </Fragment>
    );
}

Portfolio.propTypes = {
    getBalance: PropTypes.func.isRequired,
    balance: PropTypes.object.isRequired,
    quotation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    quotation: state.quotation,
    balance: state.balance
})


export default connect(mapStateToProps, { getBalance })(Portfolio);