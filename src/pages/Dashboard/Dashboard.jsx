import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [commission, setCommission] = useState(0);
  const [otherData, setOtherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('your-api-endpoint');
        const data = response.data;

        // Process the data and extract necessary information for charts and cards
        const chartData = processChartData(data);
        const commission = data.commission;
        const otherData = data.otherData;

        // Update state variables
        setChartData(chartData);
        setCommission(commission);
        setOtherData(otherData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processChartData = (data) => {
    // Process the data to create chart datasets
    // Modify this function based on your data structure and chart requirements
    // Return an object with the chart data configuration
    return {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          label: 'Chart 1',
          data: [10, 20, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: 'Chart 2',
          data: [15, 25, 35],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
        // Add more datasets for other charts
      ],
    };
  };

  return (
    <div className="dashContainer">
      <h1>Dashboard</h1>

      <div className="chartContainer">
        <h2>Charts</h2>

        <div className="chart">
          <Line data={chartData} options={/* chart options */} />
        </div>

        <div className="chart">
          <Bar data={chartData} options={/* chart options */} />
        </div>

        <div className="chart">
          <Pie data={chartData} options={/* chart options */} />
        </div>

        <div className="chart">
          <Doughnut data={chartData} options={/* chart options */} />
        </div>

        <div className="chart">
          <Radar data={chartData} options={/* chart options */} />
        </div>
      </div>

      <div className="cardContainer">
        <h2>Cards</h2>

        <div className="card">
          <h3>Commission</h3>
          <p>{commission}</p>
        </div>

        {/* Add more cards for other data */}
      </div>
    </div>
  );
};

export default Dashboard;
