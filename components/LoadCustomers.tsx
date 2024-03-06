import axios from "axios";
import React, { useState, useEffect } from "react";

export default function LoadCustomers() {
  const [mydata, setData] = useState([]);
  const [myDataArroved, setDataArrived] = useState(false);
  console.log(mydata.map);
  const fetchUserData = async () => {
    const { data } = await axios.get("http://localhost:8080/api/customers");

    setData(data);
    console.log("cock");
  };

  useEffect(() => {
    fetchUserData();
    setDataArrived(true);
  }, []);

  return (
    <div>
      {myDataArroved &&
        mydata.map((customer) => (
          <div>
            <h2>{customer.uuid}</h2>
          </div>
        ))}
    </div>
  );
}
