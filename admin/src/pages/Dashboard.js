import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/restaurants">Manage Restaurants</Link></li>
        <li><Link to="/orders">Manage Orders</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
