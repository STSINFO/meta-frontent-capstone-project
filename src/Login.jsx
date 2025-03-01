import React from "react";
import face from "./assets/face-2.jpg";

export default function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <div>
          <img src={face} alt="" />
          <h3>Sara Thompton</h3>
        </div>
        <form action="#">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
