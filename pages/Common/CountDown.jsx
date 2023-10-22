import React, { useState, useEffect } from 'react';


const dDay = new Date('January 15, 2024').getTime();
const today = new Date().getTime();
const CountDown = () => {
    const [counter, setCounter] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        if (today > dDay) {
          setCounter({ ...counter, days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            let timeDifference = dDay - currentTime;
    
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            timeDifference -= days * 1000 * 60 * 60 * 24;
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            timeDifference -= hours * 1000 * 60 * 60;
            const minutes = Math.floor(timeDifference / (1000 * 60));
            timeDifference -= minutes * 1000 * 60;
            const seconds = Math.floor(timeDifference / 1000);
    
            setCounter({ ...counter, days, hours, minutes, seconds });
          }, 1000);
    
          return () => {
            clearInterval(countdownInterval);
          };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <>
        <div className="bg-black text-white py-5 mt-10 w-full" id="countdown">
            <div className="countdownContainer">
                <div className="mainText">
                    <span>{counter.days}</span>
                    <span>Days</span>
                </div>
                <div className="column">:</div>
                <div className="mainText">
                    <span>{counter.hours}</span>
                    <span>Hours</span>
                </div>
                <div className="column">:</div>
                <div className="mainText">
                    <span>{counter.minutes}</span>
                    <span>Minutes</span>
                </div>
                <div className="column">:</div>
                <div className="mainText">
                    <span>{counter.seconds}</span>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default CountDown