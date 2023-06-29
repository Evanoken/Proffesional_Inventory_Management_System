import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
import "./Dashboard.css";
import { apiDomain } from "../../Utils/Utils";
function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiDomain}/api/total`);
      const fetchedData = response.data.data;

      const labels = [
        "jan",
        "feb",
        "march",
        "april",
        "may",
        "june",
        "July",
        "aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const amounts = fetchedData.map((item) => item.total_amount);

      const lineChartData = {
        labels: labels,
        datasets: [
          {
            label: "Total Sales per Anum",
            data: amounts,
            backgroundColor: "aqua",
            borderColor: "black",
            borderWidth: 3,
            tension: 0.1,
          },
        ],
      };

      const barChartData = {
        labels: labels,
        datasets: [
          {
            label: "Total Amount",
            data: amounts,
            backgroundColor: "aqua",
            borderColor: "black",
            borderWidth: 3,
          },
        ],
      };

      setData({ lineChartData, barChartData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="chart-row">
        <div className="chart">
          <h1 className="text-center">Line Chart</h1>
          {data && (
            <Line data={data.lineChartData} options={{}} className="chart1" />
          )}
        </div>

        <div className="chart">
          <h1 className="text-center">Bar Chart</h1>
          {data && (
            <Bar data={data.barChartData} options={{}} className="chart1" />
          )}
        </div>
      </div>

      <div className="charting">
        <ul className="card1">
          Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
        <ul className="card1">
          Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
        <ul className="card1">
          Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
        <ul className="card1">
          Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Dashboard;
