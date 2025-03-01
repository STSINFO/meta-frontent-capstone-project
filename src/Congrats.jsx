import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Congrats() {
  const { formik } = useOutletContext();
  return (
    <div className="outer-container inner-container text-center congrats">
      <h1 className="primary-header">Congratulations! {formik.values.lname}</h1>
      <p>
        You've just a table with the little lemon Restaurant! look forward to
        serve you on {formik.values.date} - {formik.values.time}
      </p>
    </div>
  );
}
