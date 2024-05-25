import React from "react";
import "./Leadership.css";
import CountDown from "../CountDown/CountDown";
import LeadershipImage from "../../../utils/images/leadership.jpg";
import SummaryTable from "../SummaryTable/SummaryTable";
import PendingSummary from "../PendingSummary/PendingSummary";
import ConfirmSummary from "../ConfirmSummary/ConfirmSummary";
import YourSummary from "../YourSummary/YourSummary";
import Contact from "../../../utils/images/contact.png";

const Leadership = () => {
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
      <div className="leadership-info">
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
                src={LeadershipImage}
                class="card-img-top seminar-info-image"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Workshop on Leadership and Communication
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="leadership-info-detail">
          <div className="leadership-info-detail-container">
            <section class="speaker">
              <div className="d-flex flex-column">
                <p>Workshop on Leadership and Communication</p>
                <p>----------------------------------------------------</p>
              </div>
              <div>
                <p>
                  Leadership & Communication skills form clear connections among
                  your team members, fostering a stronger sense of community
                  among everyone. From communicating with team members to
                  keeping executives updated on daily operations, leaders must
                  be able to effectively communicate in a variety of ways with
                  all types of people.Leadership communication skills are
                  important because they:
                </p>
                <ul>
                  <li>
                    Promote collaboration among team members and between teams
                  </li>
                  <li>
                    Ensure communication channels between team members and
                    managers remain open and effective
                  </li>
                  <li>
                    Make sure team members clearly understand their
                    responsibilities
                  </li>
                  <li>Increase the productivity of team members</li>
                  <li>Help employees remain focused on goals and outcomes</li>
                </ul>
                <p>
                  For improving our graduates' Leadership & Communication
                  Skills, we are going to held a workshop on this topic. This
                  workshop will be mentored by Mr. Nazar E Zilani, CEO and
                  Founder at Sharpener.{" "}
                </p>
                <p>Date:</p>
                <p>04 May'2024 (Saturday) 11:00 AM</p>
                <p>Venue:</p>
                <p>Apon Uddogh Foundation</p>
                <p>8/14, Block-C, Lalmatia, Dhaka</p>
                <p>Registration Fees:</p>
                <p>Member: 500 BDT/Person <br />
                Guest: 1000 BDT/Person</p>
                <p>Non-Alumni Participant: 1000 BDT/Person</p>
                <p>Current Students:</p>
                <p>Undergraduate: 400 BDT/Person</p>
                <p>PhD/M.Phil/PMSCS/M.Sc: 800 BDT/Person</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
