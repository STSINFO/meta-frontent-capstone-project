import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function BookingForm() {
  const { formik } = useOutletContext();
  const navigate = useNavigate();

  const [initializeTimes, setInitializeTimes] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
    ).then((res) => console.log(res.json));
    // setInitializeTimes(fetchAPI(date));
  }, []);

  const handleClick = () => {
    formik.handleSubmit;
    navigate("/reservations/confirm");
  };

  return (
    <section className="booking confirm">
      <form action="#" className="form-container">
        <div className="form-2-cols">
          <div className="wrapper">
            <div className="control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                placeholder="date"
                id="date"
                name="date"
                value={formik.values.date}
                onBlur={formik.hanleBlur}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.date && (
              <small className="error">{formik.errors.date}</small>
            )}
          </div>
          <div className="wrapper">
            <div className="control">
              <label htmlFor="time">Time</label>
              <select
                name="time"
                id="time"
                value={formik.values.time}
                onBlur={formik.hanleBlur}
                onChange={formik.handleChange}
              >
                <option value="">Time</option>
                {initializeTimes.map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>
            </div>
            {formik.errors.time && (
              <small className="error">{formik.errors.time}</small>
            )}
          </div>
        </div>
        <div className="wrapper">
          <div className="control">
            <label htmlFor="numberOfDiners">Number of Diners</label>
            <input
              type="number"
              id="numberOfDiners"
              name="numberOfDiners"
              value={formik.values.numberOfDiners}
              onBlur={formik.hanleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.numberOfDiners && (
            <small className="error">{formik.errors.numberOfDiners}</small>
          )}
        </div>
        <div className="wrapper">
          <div className="control">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              id="occasion"
              value={formik.values.occasion}
              onBlur={formik.hanleBlur}
              onChange={formik.handleChange}
            >
              <option value="">occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          {formik.errors.occasion && (
            <small className="error">{formik.errors.time}</small>
          )}
        </div>

        <button
          disabled={
            formik.errors.date ||
            formik.errors.time ||
            formik.errors.numberOfDiners ||
            formik.errors.occasion
          }
          type="submit"
          onClick={handleClick}
        >
          Let's go
        </button>
      </form>
      <div className="image-box"></div>
    </section>
  );
}
