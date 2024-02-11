import { useEffect } from "react";
import "./clock.css"

function Clock(){

useEffect(() => {
const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');
const dayText = document.querySelector('.day');
const days = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
]
const ampmText = document.querySelector('.ampm') 
const monthText = document.querySelector('.month')
const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUK",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
]
const yearText = document.querySelector('.year')
const dateText = document.querySelector('.date')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) - 90;
    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) - 90;
    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) - 90;
    const day = now.getDay()
    const date = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const ampm = hours < 12 ? "AM" : "PM"


    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    dayText.textContent = days[day]
    ampmText.textContent = ampm
    monthText.textContent = months[month]
    yearText.textContent = year
    dateText.textContent = date
}

setInterval(setDate, 1000);

}, [])

    return(
        <div className="clock-board-container">
        <div className="clock-board">
        <div className="sign top">
            <p className="year line-through-text"></p>
        </div>
        <div className="sign mid-left">
            <p className="month line-through-text"></p>
        </div>
        <div className="sign mid-right">
            <p className="date line-through-text"></p>
        </div>
        <div className="clock-face">
            <div className="inner-clock"></div>
            <div className="time-mark t-12"></div>
            <div className="time-mark t-11"></div>
            <div className="time-mark t-10"></div>
            <div className="time-mark t-9"></div>
            <div className="time-mark t-8"></div>
            <div className="time-mark t-7"></div>
            <div className="time-mark t-6"></div>
            <div className="center-clock"></div>
            <div className="clock-hand second"></div>
            <div className="clock-hand min"></div>
            <div className="clock-hand hour"></div>
        </div>
        <div className="sign btm-right">
            <div className="day-container">
                <div>
                    <p className="day line-through-text"></p>
                </div>
                <div>
                    <p className="ampm line-through-text"></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Clock