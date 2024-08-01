"use client";
import Image from "next/image";
import { TimerCountdown } from "./TimerCountdown";
import Hero from "../assets/ap-2-.png"

const startDate = new Date(); // Data de início
const endDate = new Date("2024-08-05T07:59:59"); // Data de fim

export function PageCountdown() {
  return (
    <>
      <div className="h-screen bg-black w-full">
        <div className="flex flex-col h-full w-full">
          <div className="flex-1">
              {/* <h1 className="text-red-50 items-center justify-center">LUXURY</h1> */}
            <div className="flex min-h-full items-center justify-center text-white">
              <Image 
              src={Hero}
              alt=""
              />
              {/* <h1 className="text-[420px] font-bold">LUXURY</h1> */}
            </div>
          </div>
          <div className="h-[200px] bg-gray-300">
            <div className="flex items-center justify-center">
              <TimerCountdown startDate={startDate} endDate={endDate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
