import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoadCustomers from "./LoadCustomers";

export default function EditCustomer() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="table w-full ...">
          <div className="table-header-group ...">
            <div className="table-row">
              <div className="table-cell text-left ...">UUID</div>
              <div className="table-cell text-left ...">First Name</div>
              <div className="table-cell text-left ...">Last Name</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <LoadCustomers></LoadCustomers>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
