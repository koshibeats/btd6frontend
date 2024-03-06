import Image from "next/image";
import { Inter } from "next/font/google";
import AddCustomer from "../../components/AddCustomer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AddCustomer></AddCustomer>
    </>
  );
}
