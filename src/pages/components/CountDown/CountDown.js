import React from "react";
import { useEffect, useState } from "react";
import './CountDown.css';

const COUNTDOWN_TARGET = new Date("2024-05-24T23:59:59");

const getTimeLeft = () => {
    const now = new Date();
    if (now > COUNTDOWN_TARGET) {
        // Countdown target date has passed, return all zeros
        return { DAYS: 0, HOURS: 0, MINS: 0, SECS: 0 };
    }
    const totalTimeLeft = COUNTDOWN_TARGET - now;
    const DAYS = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const HOURS = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const MINS = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const SECS = Math.floor((totalTimeLeft / 1000) % 60);
    return { DAYS, HOURS, MINS, SECS };
};

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        if (timeLeft.DAYS === 0 && timeLeft.HOURS === 0 && timeLeft.MINS === 0 && timeLeft.SECS === 0) {
            // Countdown has reached zero, no need to update
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='countdown'>
            <div className='content'>
                {Object.entries(timeLeft).map(([label, value]) => (
                    <div className='box' key={label}>
                        <div className='value'><span>{value}</span></div>
                        <span className='label'>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountDown;
