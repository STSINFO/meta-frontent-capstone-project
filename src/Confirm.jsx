import React from "react";
import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reservations/congrats");
  };
  return (
    <section className="booking confirm">
      <form action="#" className="form-container">
        <div className="control">
          <label htmlFor="firstName">First name</label>
          <input type="text" placeholder="First name" id="firstName" />
        </div>
        <div className="control">
          <label htmlFor="lastName">Last name</label>
          <input type="text" placeholder="Last name" id="lastName" />
        </div>
        <div className="control">
          <label htmlFor="phone">Phone Numer</label>
          <input type="text" placeholder="+1-000-000-000" id="phone" />
        </div>
        <div className="control">
          <label htmlFor="specialRequest">Add specail request (optional)</label>
          <textarea placeholder="First name" id="specialRequst">
            {" "}
          </textarea>
        </div>
        <button onClick={handleClick}>Book</button>
      </form>
      <div className="image-box"></div>
    </section>
  );
}
