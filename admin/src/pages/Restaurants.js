import React, { useEffect, useState } from "react";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:3000/api/restaurants", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setRestaurants(res.data));
  }, [token]);

  return (
    <div className="container mt-5">
      <h2>Restaurants</h2>
      <ul className="list-group">
        {restaurants.map(r => (
          <li className="list-group-item" key={r._id}>
            {r.name} - {r.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
