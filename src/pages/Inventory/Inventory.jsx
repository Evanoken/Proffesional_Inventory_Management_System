import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import './Inventory'
import { apiDomain } from '../../Utils/Utils';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Inventory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiDomain}/api/orders`);
      const data = response.data;
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const downloadAsPdf = () => {
    const docDefinition = {
      content: [
        { text: 'Inventory Reports', style: 'header' },
        { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['Order ID', 'Customer ID', 'Order Date', 'Total Amount'],
              ...orders.map((order) => [
                order.order_id,
                order.customer_id,
                order.order_date,
                order.total_amount,
              ]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
      },
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.download('inventory_reports.pdf');
  };

  return (
    <div className="inventory-container">
      <h2>Inventory Reports</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {orders.length === 0 ? (
            <p>No orders available.</p>
          ) : (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>Order Date</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.order_id}</td>
                      <td>{order.customer_id}</td>
                      <td>{order.order_date}</td>
                      <td>{order.total_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <button onClick={downloadAsPdf}>Download as PDF</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Inventory;
