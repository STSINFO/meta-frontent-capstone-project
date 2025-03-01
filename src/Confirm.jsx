import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Confirm() {
  const { formik } = useOutletContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reservations/congrats");
  };
  return (
    <section className="booking confirm">
      <form
        action="#"
        className="form-container"
        onSubmit={formik.handleSubmit}
      >
        <div className="wrapper">
          <div className="control">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              placeholder="First name"
              id="fname"
              name="fname"
              value={formik.values.fname}
              onBlur={formik.hanleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.fname && (
            <small className="error">{formik.errors.fname}</small>
          )}
        </div>
        <div className="wrapper">
          <div className="control">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              name="lname"
              id="lname"
              value={formik.values.lname}
              onBlur={formik.hanleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.lname && (
            <small className="error">{formik.errors.lname}</small>
          )}
        </div>
        <div className="wrapper">
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="John@gmail.com"
              id="email"
              onBlur={formik.hanleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email && (
            <small className="error">{formik.errors.email}</small>
          )}
        </div>
        <div className="wrapper">
          <div className="control">
            <label htmlFor="phone">Phone Numer</label>
            <input
              type="text"
              name="phone"
              placeholder="+1-000-000-000"
              id="phone"
              onBlur={formik.hanleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.phone && (
            <small className="error">{formik.errors.phone}</small>
          )}
        </div>
        <div className="wrapper">
          <div className="control">
            <label htmlFor="request">Add specail request (optional)</label>
            <textarea
              name="request"
              id="requst"
              value={formik.values.request}
              onChange={formik.handleChange}
            >
              {" "}
            </textarea>
          </div>
        </div>

        <button
          disabled={
            formik.errors.fname || formik.errors.lname || formik.errors.phone
          }
          type="submit"
          onClick={handleClick}
        >
          Book
        </button>
      </form>
      <div className="image-box"></div>
    </section>
  );
}
