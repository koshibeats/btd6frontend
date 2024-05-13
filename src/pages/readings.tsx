import Image from "next/image";
import { Inter } from "next/font/google";
import AddCustomer from "../../components/AddCustomer";
import UpdateCustomer from "../../components/Customer";
import Customer from "../../components/Customer";
import Readings from "../../components/Readings";

export default function Home() {
  return (
    <>
      <Readings></Readings>
    </>
  );
}
