import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/DashBord.css"
import NavBar from "./NavBar";


const CustomerDashboard = () => {
    const [customer, setCustomer] = useState(null);
    const [testDrives, setTestDrives] = useState([]);
    const [orders, setOrders] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch customer details
        fetch("http://localhost:8080/api/customer")
            .then(res => res.json())
            .then(data => setCustomer(data))
            .catch(error => console.error("Error fetching customer data:", error));

        // Fetch test drive history
        fetch("http://localhost:8080/api/test-drives")
            .then(res => res.json())
            .then(data => setTestDrives(data))
            .catch(error => console.error("Error fetching test drive history:", error));

        // Fetch order history
        fetch("http://localhost:8080/api/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.error("Error fetching orders:", error));
        
        // Fetch messages
        fetch("http://localhost:8080/api/messages")
            .then(res => res.json())
            .then(data => setMessages(data))
            .catch(error => console.error("Error fetching messages:", error));
    }, []);

    return (
      <><NavBar /><div className="dashboard-container">
        <h1>Customer Dashboard</h1>
        {customer && (
          <div className="profile-section">
            <h2>Profile Information</h2>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
            <button>Edit Profile</button>
          </div>
        )}

        <div className="history-section">
          <h2>Test Drive History</h2>
          {testDrives.length > 0 ? (
            <ul>
              {testDrives.map((drive, index) => (
                <li key={index}>{drive.carModel} - {drive.date}</li>
              ))}
            </ul>
          ) : (
            <p>No test drives requested.</p>
          )}
          <Link to="/TestDrive"><button>Request Another Test Drive</button></Link>
        </div>

        <div className="order-history">
          <h2>Order History</h2>
          {orders.length > 0 ? (
            <ul>
              {orders.map((order, index) => (
                <li key={index}>{order.carModel} - Status: {order.status}</li>
              ))}
            </ul>
          ) : (
            <p>No orders placed yet.</p>
          )}
          <Link to="/orders"><button>View Order Details</button></Link>
        </div>

        <div className="messages-section">
          <h2>Messages & Notifications</h2>
          {messages.length > 0 ? (
            <ul>
              {messages.map((message, index) => (
                <li key={index}>{message.content}</li>
              ))}
            </ul>
          ) : (
            <p>No new messages.</p>
          )}
        </div>
      </div></>
    );
};

export default CustomerDashboard;
