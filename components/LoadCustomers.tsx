import axios from "axios";
import React, { useState, useEffect } from "react";

export default function LoadCustomers() {
  const [mydata, setData] = useState([]);

  const fetchUserData = async () => {
    const { data } = await axios.get("http://localhost:8080/api/customers");

    setData(data.customers);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {mydata.map((customer) => (
        <div>
          <h2>{customer.uuid}</h2>
        </div>
      ))}
    </div>
  );
}
