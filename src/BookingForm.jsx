import React, { useState } from "react";

export default function BookingForm() {
  const [avaibleTime, setAvailableTime] = useState([
    "",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
  ]);
  return (
    <>
      <div className="outer-container">
        <div className="form-container">
          <form className="form">
            <div className="form--2--cols">
              <div className="control">
                <label htmlFor="date">Date:</label>
                <input type="date" name="" id="date" />
              </div>
              <div className="control">
                <label htmlFor="time">Time:</label>
                <select name="" id="time">
                  <option value="">Time</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>

            <div className="control">
              <label htmlFor="number">Number of Diners:</label>
              <input type="number" min="1" max="10" id="number" />
            </div>
            <div className="control">
              <label htmlFor="occasion">Occasion:</label>
              <select id="occasion">
                <option value="">Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            <div className="">
              <h3 className="from-header">Seating Options</h3>
              <div className="form--2--cols">
                <div className="radio-control">
                  <label htmlFor="standard">Standard</label>
                  <input type="radio" id="standard" name="seating-option" />
                </div>
                <div className="radio-control">
                  <label htmlFor="outside">Outside</label>
                  <input type="radio" id="outside" name="seating-option" />
                </div>
              </div>
            </div>
            <button className="cta">Reserve a Table</button>
          </form>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
}
