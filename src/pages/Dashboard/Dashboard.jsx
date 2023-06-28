import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col,Card } from 'react-bootstrap';
import { Line, Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,Tooltip, Legend, BarElement, ArcElement} from 'chart.js';
// import faker from 'faker';
import './Dashboard.css'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);
function Dashboard() {
  const data ={
    labels: ['Mon', 'Tue', 'Wed','Thur','Fri','Sat'],
    datasets: [
      {
        label:'my first dataset',
        data: [6, 3, 9, 2, 7, 13],
        backgroundColor:'aqua',
        borderColor:'black',
        borderWidth:3,
        tension: 0.1
      },
      {
        label:'my first dataset',
        data: [2, 4, 3, 12, 7, 9],
        backgroundColor:'pink',
        borderColor:'black',
        borderWidth:3,
        tension: 0.1
      }
    ]
        
  }

  const data1 ={
    labels: ['Mon', 'Tue', 'Wed','Thur','Fri','Sat'],
    datasets: [
      {
        label:'my first dataset',
        data: [6, 3, 9, 2, 7, 13],
        backgroundColor:['aqua', 'red', 'blue', 'green', 'purple', 'violet', 'yellow'],
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
      <h1 className="text-center" >Welcome to the dashboard</h1>
       <Line data={data} options={options} className="chart1"></Line>
      </div>
      <div className="chart">
        <h1 className="text-center">Bar Chart</h1>
       <Bar data={data} options={options} className="chart1"></Bar>
      </div>
      <div className="chart">
        <h1 className="text-center">Welcome to the dashboard</h1>
       <Line data={data} options={options} className="chart1"></Line>
      </div>
         
      <div className="charting">
        <ul className='card1'>Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
        <ul className='card1'>Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
        <ul className='card1'>Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
        <ul className='card1'>Sales
          <li>$2827728 purchases</li>
          <li>$2882882 commision</li>
        </ul>
      </div>
      </div>
         
  );
  

}
export default Dashboard;
  