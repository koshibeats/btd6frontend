import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center  mb-5 bg-fixed bg-center bg-cover">
        <div className="" />
      </div>
      <div className="flex items-center justify-center text-2xl font-bold"></div>
      <div className="flex items-center justify-center text-lg "></div>
      <div className="flex items-center justify-center gap-x-10">
        <div>
          <div className="">
            <p>Erstellen</p>
            <button
              type="submit"
              className="flex justify-end py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-indigo-500 sm:w-fit "
              onClick={async () => {}}
            >
              <Link href="/createcustomer">Submit</Link>
            </button>
          </div>
        </div>
        <div></div>
        <div>
          <div>
            <div>
              <p>Lesen Bearbeiten und Löschen</p>
              <button
                type="submit"
                className="flex justify-end py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-indigo-500 sm:w-fit "
                onClick={async () => {}}
              >
                <Link href="/customers">submit</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-40 flex items-center justify-center text-3xl"></div>
    </>
  );
};
export default Hero;
