import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { SubmitHandler, useForm } from "react-hook-form";
import LoadCustomers from "./LoadCustomers";
import { InputText } from "primereact/inputtext";

export default function EditCustomer() {
  const [mydata, setData] = useState([]);

  const fetchUserData = async () => {
    return await axios.get("http://localhost:8080/api/customers");
    /*  {mydata.map((customer) => (
          <div>
            <div className="table-row">{customer.uuid}</div>
          </div>
        ))}*/
  };

  const fetchReadingData = async (customers) => {
    console.log(customers);
    return customers.data.customers.map((c) => {
      return axios
        .get("http://localhost:8080/api/readings?customer=" + c.uuid)
        .then((rs) => {
          console.log(rs);
          return rs;
        })
        .then((rs) =>
          rs.data.readings.map((r) => ({
            uuid: c.uuid,
            firstname: c.firstname,
            lastname: c.lastname,
            metercount: r.metercount,
            meterid: r.meterid,
            substitute: r.substitute,
            comment: r.comment,
          }))
        );
    });
    /*  {mydata.map((customer) => (
          <div>
            <div className="table-row">{customer.uuid}</div>
          </div>
        ))}*/
  };

  useEffect(() => {
    fetchUserData()
      .then((u) => fetchReadingData(u))
      .then(setData);
  }, []);

  return (
    <>
      <DataTable value={mydata} editMode="cell">
        <Column field="firstname" header="First Name"></Column>
        <Column field="lastname" header="Last Name"></Column>
        <Column field="uuid" header="UUID"></Column>
        <Column field="metercount" header="Meter Count"></Column>
        <Column field="meterid" header="Meter Id"></Column>
        <Column field="substitute" header="Substitute"></Column>
        <Column field="comment" header="Comment"></Column>
      </DataTable>
    </>
  );
}
