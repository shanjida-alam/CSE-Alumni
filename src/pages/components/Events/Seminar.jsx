import React from "react";
import "./Seminar.css";
import CountDown from "../CountDown/CountDown";
import SeminarImage from "../../../utils/images/seminar&pannelDiscussion.png";
import SummaryTable from "../SummaryTable/SummaryTable";
import PendingSummary from "../PendingSummary/PendingSummary";
import ConfirmSummary from "../ConfirmSummary/ConfirmSummary";
import YourSummary from "../YourSummary/YourSummary";
import Contact from "../../../utils/images/contact.png";

const Seminar = () => {
  const summaryData = [
    {
      title: "Total Summary",
      memberCount: 6,
      guestCount: 0,
      totalCount: 6,
      viewAllLink: { href: "#" },
    },
    // ... data for other cards (Member, Guest, Total)
  ];

  const PendingSummaryData = [
    {
      title: "Pending Summary",
      memberCount: 6,
      guestCount: 0,
      totalCount: 6,
      viewAllLink: { href: "#" },
    },
    // ... data for other cards (Member, Guest, Total)
  ];

  const ConfirmSummaryData = [
    {
      title: "Confirmed Summary",
      memberCount: 6,
      guestCount: 0,
      totalCount: 6,
      viewAllLink: { href: "#" },
    },
    // ... data for other cards (Member, Guest, Total)
  ];

  const YourSummaryData = [
    {
      title: "Your Summary",
      viewAllLink: { href: "#" },
    },
  ];
  return (
    <div className="seminar">
      <div className="card-content">
        <div class="card element">
          <div class="card-header">Registration Ends: May 24, 2024</div>
          <div class="card-body">
            <CountDown />
          </div>
        </div>
      </div>
      <p className="paragraph">Do not have an account?</p>
      <div className="paragraph-content">
        <div className="item">
          <ul>
            <li>
              To register to this event you need to be a registered member.
            </li>
            <li>Complete your registration first.</li>
            <li>
              After registration is completed login with your user id and
              password.
            </li>
            <li>After login, register to this event.</li>
          </ul>
        </div>
      </div>
      <div id="summaryTable">
        <div className="summary-table">
          <div className="container">
            <div className="row">
              {summaryData.map((data) => (
                <div key={data.title}>
                  <SummaryTable {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="summary-table">
          <div className="container">
            <div className="row">
              {PendingSummaryData.map((data) => (
                <div key={data.title}>
                  <PendingSummary {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="summary-table">
          <div className="container">
            <div className="row">
              {ConfirmSummaryData.map((data) => (
                <div key={data.title}>
                  <ConfirmSummary {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="summary-table">
          <div className="container">
            <div className="row">
              {YourSummaryData.map((data) => (
                <div key={data.title}>
                  <YourSummary {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="seminar-info">
        <div id="contact">
          <div>
            <img src={Contact} style={{ height: 20, width: 20 }} />
          </div>
          <div className="contact-content">
            <p>By Golam Rabbi May 21, 2024</p>
          </div>
        </div>
        <div className="seminar-info-content">
          <div class="card-group">
            <div class="card">
              <img
                src={SeminarImage}
                class="card-img-top seminar-info-image"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Seminar & Panel Discussion on Transforming the Workplace : The
                  Impact of Artificial Intelligence and Cloud Computing on
                  Business Efficiency
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="seminar-info-detail">
          <div className="seminar-info-detail-container">
            <section class="speaker">
              <div className="d-flex flex-column">
                <p>Seminar & Panel Discussion on</p>
                <h6>
                Transforming the Workplace: The Impact of Artificial
                Intelligence and Cloud Computing on Business Efficiency
              </h6>
              </div>
              <div className="d-flex flex-column justify-content-start">
              <p>Keynote Speaker:</p>
              <h3>Shamim Ashrafi</h3>
              <p>Chief Executive Officer (CEO) & Founder at InNeed.Cloud</p>
              <p>
                Former Sr. Data & Analytics Architect at Amazon Web Services
              </p>
              </div>
            </section>
            <section class="details">
              <div className="d-flex flex-row">
                <p>Date:</p>
                <p>Sunday, May 26, 2024</p>
              </div>
              <div className="d-flex flex-row">
                <p>Time:</p>
                <p>10:00 AM</p>
              </div>
              <div className="d-flex flex-row">
                <p>Venue:</p>
                <p>
                  Multipurpose Room, Department of CSE, Jahangirnagar University
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminar;
