import React from "react";
import image from "./assets/background4.jpg";

export default function BookingForm() {
  return (
    <section className="booking">
      <form action="#" className="form-container">
        <div className="form-2-cols">
          <div className="radio-control">
            <label htmlFor="standard">Standard</label>
            <input type="radio" name="seating" id="standard" />
          </div>
          <div className="radio-control">
            <label htmlFor="outside">Outside</label>
            <input type="radio" name="seating" id="outside" />
          </div>
        </div>
        <div className="form-2-cols">
          <div className="control">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="control">
            <label htmlFor="date">Time</label>
            <select name="time" id="time">
              <option value="">Time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
            </select>
          </div>
        </div>
        <div className="control">
          <label htmlFor="number">Number of Diners</label>
          <input type="number" min="1" max="10" id="number" />
        </div>
        <div className="control">
          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" id="occasion">
            <option value="">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <button>Reserver a Table</button>
      </form>
      <div className="image-box"></div>
    </section>
  );
}
