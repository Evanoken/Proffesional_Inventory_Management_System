import "./sales.css";
import { Line, Bar, Pie, Doughnut, Radar } from "react-chartjs-2";
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
function Sales() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [
      {
        label: "my first dataset",
        data: [6, 3, 9, 2, 7, 13],
        backgroundColor: [
          "aqua",
          "red",
          "blue",
          "green",
          "purple",
          "violet",
          "yellow",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {},
  };
  return (
    <div className="Scon">
      <div className="row1">
        <div className="col1">
          Complete Orders
          <ul>
            <li>
              <h1>Order1:</h1>
              Moreover, I have actively sought opportunities beyond the
              classroom my communication, teamwork, and leadership abilities.
            </li>

            <li>Order2</li>
          </ul>
        </div>
        <div className="col1">
          Pending Orders
          <ul>
            <li>Order1</li>
            <li>Order2</li>
          </ul>
        </div>
        <div className="col">
          Canceled Orders
          <ul>
            <li>Order1</li>
            <li>Order2</li>
          </ul>
        </div>
      </div>
      <div className="row2">
        <div className="chart">
          <h1 className="text-center">Bar Chart</h1>
          <Bar data={data} options={options}></Bar>
        </div>
        <div className="chart">
          <h1 className="text-center">Line Graph</h1>
          <Line data={data} options={options}></Line>
        </div>
      </div>
    </div>
  );
}

export default Sales;
