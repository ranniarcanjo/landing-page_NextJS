// import React, { useEffect, useState } from "react";


//     const [partyTime, setPartyTime] = useState(false);
//     const [days, setDays] = useState(0);
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);

//     export function TimerCountdown() {
//     useEffect(() =>{
        
//         const target = new Date('07/23/2024 09:59:59');
        
//         const interval = setInterval(() =>{
//             const now = new Date();
//             const difference = target.getTime() - now.getTime(); 
            
//             const d = Math.floor(difference / (1000 * 60 * 60 * 24));
//             setDays(d);

//             const h = Math.floor(
//                 (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//             );
//             setHours(h);

//             const m = Math.floor(
//                 (difference % (1000 * 60 * 60)) / (1000 * 60)
//             );
//             setMinutes(m);

//             const s = Math.floor(
//                 (difference % (1000 * 60)) / 1000);
//             setSeconds(s);

//             if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
//                 setPartyTime(true);
//               }

//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (

//         <>
//             <div>É hoje!{partyTime}</div>          
//             <div>Days{days}</div>
//             <div>Hours{hours}</div>
//             <div>Minutes{minutes}</div>
//             <div>Seconds{seconds}</div>
//         </>   
//     );
// }






