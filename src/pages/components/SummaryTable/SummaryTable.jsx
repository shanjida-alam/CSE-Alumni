import React from "react";
import "./SummaryTable.css";

function SummaryTable({
  title,
  memberCount,
  guestCount,
  totalCount,
  viewAllLink,
}) {
  return (
    <div className="card summary" id="c-content">
      <div className="card-header table-title">{title}</div>
      <div className="card-body">
        <div className="d-flex table-content">
          <p className="card-text">Member</p>
          <p>{memberCount}</p>
        </div>
        <div className="d-flex table-content">
          <p className="card-text table-content">Guest</p>
          <p>{guestCount}</p>
        </div>
        <div className="d-flex table-content">
          <p className="card-text table-content">Total</p>
          <p>{totalCount} </p>
        </div>
        <div className="d-flex table-content last-element">
          <a href={viewAllLink} className="card-link">
            {viewAllLink.text || "View all members"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SummaryTable;
