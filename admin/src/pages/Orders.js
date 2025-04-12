import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setOrders(res.data));
  }, [token]);

  return (
    <div className="container mt-5">
      <h2>Orders</h2>
      <ul className="list-group">
        {orders.map(o => (
          <li className="list-group-item" key={o._id}>
            Order #{o._id} - Status: {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
