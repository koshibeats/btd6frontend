import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { SubmitHandler, useForm } from "react-hook-form";
import LoadCustomers from "./LoadCustomers";
import { InputText } from "primereact/inputtext";

export default function EditReadings() {
  const [mydata, setData] = useState([]);

  const fetchUserData = async () => {
    const { data } = await axios.get("http://localhost:8080/api/readings");

    setData(data.customers);
    /*  {mydata.map((customer) => (
          <div>
            <div className="table-row">{customer.uuid}</div>
          </div>
        ))}*/
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onCellEditChange = (options) => (event) => {
    options.editorCallback(event.target.value);
  };
  const cellEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };
  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;
    if (newValue.trim().length > 0) rowData[field] = newValue;
    else event.preventDefault();
  };

  const mockMeterId = "";

  return (
    <>
      <DataTable value={mydata} editMode="cell">
        <Column
          field="firstname"
          header="First Name"
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
        ></Column>
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
