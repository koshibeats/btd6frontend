import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { SubmitHandler, useForm } from "react-hook-form";
import LoadCustomers from "./LoadCustomers";

export default function EditCustomer() {

  const [mydata, setData] = useState([]);

  
  const fetchUserData = async () => {
    const { data } = await axios.get("./ja.json");
  
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

  return (<>




    <DataTable value={mydata} tableStyle={{ minWidth: '50rem' }}>
    <Column field="firstname" header="First Name"></Column>
    <Column field="lastname" header="Last Name"></Column>
    <Column field="uuid" header="UUID"></Column>
    
</DataTable>
</>
        
        

    
  );
}
