import React from "react";

export default function Card({ url, title, price, text }) {
  return (
    <div className="card">
      <img className="card-image" src={url} alt="" />
      <div className="card-content">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
          <span className="card-price">${price}</span>
        </div>
        <div className="card-body">{text}</div>
        <p className="card-footer">
          Order a delivery
          <span>
            <ion-icon name="bicycle-outline"></ion-icon>
          </span>
        </p>
      </div>
    </div>
  );
}
