import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiDomain } from "../../Utils/Utils";

import "./Sales.css"; 

const Sales = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    totalAmount: "",
    customer_name: "",
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiDomain}/api/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error while fetching orders:", error);
    }
  };

  const createOrder = async (orderData) => {
    try {
      await axios.post(`${apiDomain}/api/orders`, orderData);
      // Update orders list or perform any necessary actions
      fetchOrders();
    } catch (error) {
      console.error("Error while creating order:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(formData);
    setFormData({ date: "", totalAmount: "", productIds: "" });
  };

  return (
    <div className="sales-container">
      <div className="orders">
        <h2 className="section-title">Orders</h2>
        {orders.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>Customer ID</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.order_id}>
                  <td>{order.order_id}</td>
                  <td>{order.order_date}</td>
                  <td>{order.total_amount}</td>
                  <td>{order.customer_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders available</p>
        )}
      </div>

      <h2 className="section-title">Create Order</h2>
      {/* Create Order form */}
      <div className="create-order">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalAmount">Total Amount:</label>
            <input
              type="text"
              id="totalAmount"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productIds">Product IDs:</label>
            <input
              type="text"
              id="productIds"
              name="productIds"
              value={formData.productIds}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Sales;
