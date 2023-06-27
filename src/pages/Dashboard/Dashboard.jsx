import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col,Card } from 'react-bootstrap';
import { Line, Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,Tooltip, Legend,} from 'chart.js';
// import faker from 'faker';
import './Dashboard.css'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
function Dashboard() {
  const data ={
    labels: ['Mon', 'Tue', 'Wed','Thur','Fri','Sat'],
    datasets: [
      {
        label:'my first dataset',
        data: [6, 3, 9, 2, 7, 13],
        backgroundColor:'aqua',
        borderColor:'black',
        borderWidth:5,
        tension: 0.4

      }
    ]
          
  }
  const options={
    plugins:{
      legend:true
    },
    scales:{

    }
    
  }
  return (
    <div className="Dcon">
      <div className="chart">
      <h1 className="text-center">Welcome to the dashboard</h1>
       <Line data={data} options={options}></Line>
      </div>
      <div className="chart">
        <h1 className="text-center">Welcome to the dashboard</h1>
       <Line data={data} options={options}></Line>
      </div>
      <div className="chart">
        <h1 className="text-center">Welcome to the dashboard</h1>
       <Line data={data} options={options}></Line>
      </div>
      <div className="chart">
        <h1 className="text-center">Welcome to the dashboard</h1>
       <Line data={data} options={options}></Line>
      </div>
      <div className="chart">
        <h1 className="text-center">Welcome to the dashboard</h1>
       <Line data={data} options={options}></Line>
      </div>
      <div className="chart">
        <h1 className="text-center">Line graph 4</h1>
       <Line data={data} options={options}></Line>
      </div>
      </div>
         
  );
  

}
export default Dashboard;
  