import Image from "next/image";
import { Inter } from "next/font/google";
import AddCustomer from "../../components/AddCustomer";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero></Hero>
    </>
  );
}
