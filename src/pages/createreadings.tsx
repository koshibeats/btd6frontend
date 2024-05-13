import Image from "next/image";
import { Inter } from "next/font/google";
import AddCustomer from "../../components/AddCustomer";
import AddReadings from "../../components/AddReadings";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AddReadings></AddReadings>
    </>
  );
}
