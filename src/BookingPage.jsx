import React, { useState } from "react";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function BookingPage() {
  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required").nullable(),
    time: Yup.string().required("Time is required"),
    numberOfDiners: Yup.number()
      .min(1)
      .max(10)
      .required("Number of diners is required"),
    occasion: Yup.string().required("Occasion is required"),
    seatType: Yup.string().required("Seat type is required"),
    fname: Yup.string().required("Enter your first name"),
    lname: Yup.string().required("Enter your last name"),
    email: Yup.string().email("Invalid email").required("Enter your email"),
    phone: Yup.string().required("Enter your phone number"),
    request: Yup.string(),
  });

  const initialValues = {
    date: "",
    time: "",
    numberOfDiners: "",
    occasion: "",
    seatType: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    request: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      initialValues = {
        date: "",
        time: "",
        numberOfDiners: "",
        occasion: "",
        seatType: "",
        fname: "",
        lname: "",
        phone: "",
        email: "",
        request: "",
      };
    },
  });

  return (
    <>
      <Banner />
      <Outlet context={{ formik }} />
    </>
  );
}
