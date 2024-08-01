"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  startDate: Date;
  endDate: Date;
}

export function TimerCountdown({ startDate, endDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <>
      <div className="">
        <h2 className="text-center mt-2">Contagem Regressiva</h2>
        <div className="flex">
          <p className="flex flex-col items-center justify-center m-8 text-7xl font-extrabold bg-gradient-to-b from-slate-800 via-slate-600 to-slate-950 bg-clip-text text-transparent">
            {timeLeft.days}
            <p className="text-xl font-bold text-gray-600">Dias</p>
          </p>
          <p className="flex flex-col items-center justify-center m-8 text-7xl font-extrabold bg-gradient-to-b from-slate-800 via-slate-600 to-slate-950 bg-clip-text text-transparent">
            {timeLeft.hours}
            <p className="text-xl font-bold text-gray-600">Horas</p>
          </p>
          <p className="flex flex-col items-center justify-center m-8 text-7xl font-extrabold bg-gradient-to-b from-slate-800 via-slate-600 to-slate-950 bg-clip-text text-transparent">
            {timeLeft.minutes}
            <p className="text-xl font-bold text-gray-600">Minutos</p>
          </p>
          <p className="flex flex-col items-center justify-center m-8 text-7xl font-extrabold bg-gradient-to-b  from-slate-800 via-slate-600 to-slate-950 bg-clip-text text-transparent">
            {timeLeft.seconds}
            <p className="text-xl sm:text font-bold text-gray-600">Segundos</p>
          </p>
        </div>
      </div>
    </>
  );
}
