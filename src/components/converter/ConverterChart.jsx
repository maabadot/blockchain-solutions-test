import React from 'react';
import { Line } from 'react-chartjs-2';

const ConverterChart = ({ currency, prices }) => {
    const data = {
        labels: prices.map(price => {
            const date = new Date(price[0]);
            return `${date.getUTCDate()}.${date.getUTCMonth() + 1}`
        }),
        datasets: [
            {
                label: `USD value of ${currency}`,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderColor: 'rgba(0,0,0,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,0,0,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(0,0,0,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: prices.map(price => Math.floor(price[1] * 100) / 100)
            }
        ]
    }

    return (
        <div className='chart'>
            <Line data={data} 
                width={450}
                height={300}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}

export default ConverterChart;
