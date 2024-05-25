import React from "react";
import "./YourSummary.css";

function YourSummary({ title, viewAllLink }) {
  return (
    <div className="card summary" id="c-content">
         <div className="card-header table-title">{title}</div>
         <div className="card-body">
         <div className="d-flex table-content1">
          <p className="card-text" id="cardText">REGISTRATION IS CLOSED</p>
        </div>
        <div className="d-flex table-content last-element1">
          <a href={viewAllLink} className="card-link" id="registration-closed">
            {viewAllLink.text || "Registration is closed"}
          </a>
        </div>
         </div>
    </div>
  );
}

export default YourSummary;
