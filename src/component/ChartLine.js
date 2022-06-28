import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


function ChartLine({ labels, datasets }) {

    const dataLine = {
        labels: labels,
        datasets: datasets
    }

    const optionsLine = {
        plugins:{
            legend: {
             display: false
            },
        },

        scales: {
            y: {
                ticks: { 
                    stepSize: 20,
                },
                grid: { 
                    display: false
                }
            }
        },

    }

    return (
        <div>
            <Line
                data={dataLine} options={optionsLine}
            />
        </div>
    )
}

export default ChartLine