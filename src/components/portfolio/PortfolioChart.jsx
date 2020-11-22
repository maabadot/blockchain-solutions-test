import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from "react-chartjs-2";
import {connect} from 'react-redux'

const PortfolioChart = ({ quotation, balance }) => {
    const data = {
        labels: ['US Dollar', 'Bitcoin USD Value', 'Ethereum USD Value'],
        datasets: [
            {
                label: 'Portfolio',
                data: [
                    balance.USD,
                    Math.round(balance.BTC * quotation.BTC * 100) / 100,
                    Math.round(balance.ETH * quotation.ETH * 100) / 100
                ],
                backgroundColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(204, 204, 204, 1)',
                    'rgba(102, 102, 102, 1)'
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 2,
            },
        ],
    }

    return (
        <div>
            <Pie data={data}
                 width={700}
                 height={350}
                 options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}

PortfolioChart.propTypes = {
    quotation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    quotation: state.quotation
})

export default connect(mapStateToProps)(PortfolioChart);
