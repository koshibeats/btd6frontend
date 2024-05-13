import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  firstName: string;
  lastName: string;
  UUID: string;
  message: string;
  meter_count: string;
  meter_id: string;
  substitute: string;
  comment: string;
};

const required = "This field is required";
const maxLength = "Your Input is too long";
const wrongPattern = "The email is in a wrong format";
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,

    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data: any) => console.log(data);

  const errorMessage = (message: string) => {
    return <div>{message}</div>;
  };
  const sucessfulLoading = (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      Customer has been created
    </div>
  );

  const [firstName, setfirstname] = useState(""); // Initialize the state variable
  const [lastName, setlastname] = useState(""); // Initialize the
  const [mydata, setData] = useState([]);
  const fetchUserData = async () => {
    const { data } = await axios.get("http://localhost:8080/api/customers");

    setData(data.customers);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {/*success && <h1>{sucessfulLoading}</h1>*/}

      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Customer</p>
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                list="customers"
              ></input>
              <datalist id="customers">
                {mydata.map((customer) => {
                  return (
                    <option
                      label={`${customer.firstname} ${customer.lastname}`}
                      value={customer.uuid}
                    ></option>
                  );
                })}
              </datalist>
            </div>
            <div>
              <p>Meter Count</p>
              <input
                id="meter_count"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                {...register("meter_count", { required: true })}
                onChange={(event) => setlastname(event.target.value)}
              ></input>
              {errors.message &&
                errors.message.type === "required" &&
                errorMessage(required)}
            </div>

            <div>
              <p>Meter ID</p>
              <input
                id="meter_id"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                {...register("meter_id", { required: true })}
                onChange={(event) => setlastname(event.target.value)}
              ></input>
              {errors.message &&
                errors.message.type === "required" &&
                errorMessage(required)}
            </div>

            <div>
              <p>Substitute</p>
              <input
                id="substitute"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                {...register("substitute", { required: true })}
                onChange={(event) => setlastname(event.target.value)}
              ></input>
              {errors.message &&
                errors.message.type === "required" &&
                errorMessage(required)}
            </div>
            <div>
              <p>Comment</p>
              <input
                id="comment"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                {...register("comment", { required: true })}
                onChange={(event) => setlastname(event.target.value)}
              ></input>
              {errors.message &&
                errors.message.type === "required" &&
                errorMessage(required)}
            </div>

            <div>
              <button
                id="createcustomer"
                type="submit"
                className="flex justify-end py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-indigo-500 sm:w-fit "
                onClick={async () => {
                  await axios.post("http://localhost:8080/api/customers/", {
                    firstname: firstName,
                    lastname: lastName,
                  });
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
