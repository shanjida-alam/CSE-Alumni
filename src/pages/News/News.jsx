// src/pages/News/News.jsx
import React from "react";
import "./News.css";
import seminarImage from "../../utils/images/seminar&pannelDiscussion.png";
import Leadership from "../../utils/images/leadership.jpg";
import Person from "../../utils/images/mannanBhai.png";
import FifthReunion from "../../utils/images/5th-reunion.png";
import IftarParty from "../../utils/images/iftar-party.png";
import FourthReunion from "../../utils/images/4th-reunion.png";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="news-and-events">
      <div className="mar">
        <div className="row row-cols-1 row-cols-md-4 g-5 pt-5">
          <div className="col">
            <div className="card h-100">
              <div className="content">
                <img
                  src={seminarImage}
                  className="card-img-top img-fluid p-2"
                  alt="Seminar"
                  style={{ height: 200, width: 240, borderRadius: 10 }}
                />
                <div className="card-body">
                  <h5>
                    <Link
                      to="/seminar"
                      className="d-flex align-items-center underline letter"
                    >
                      Seminar & Panel Discussion on Transforming the Workplace:
                      The Impact of Artificial Intelligence and Cloud Computing
                      on Business Efficiency
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="content">
                <img
                  src={Leadership}
                  className="card-img-top img-fluid p-2"
                  alt="Leadership Workshop"
                  style={{ height: 200, width: 240, borderRadius: 10 }}
                />
                <div className="card-body">
                  <h5>
                    <Link
                      to="/leadership"
                      className="d-flex align-items-center underline"
                    >
                      Workshop on Leadership and Communication
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="content">
                <img
                  src={Person}
                  className="card-img-top img-fluid p-2"
                  alt="Fundraiser"
                  style={{ height: 200, width: 240, borderRadius: 10 }}
                />
                <div className="card-body">
                  <h5>
                    <Link
                      to="/helpfund"
                      className="d-flex align-items-center underline"
                    >
                      Help fund for treatment of Abdul Mannan Bhai's wife
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="content">
                <img
                  src={FifthReunion}
                  className="card-img-top img-fluid p-2"
                  alt="5th Reunion"
                  style={{ height: 200, width: 240, borderRadius: 10 }}
                />
                <div className="card-body">
                  <h5>
                    <Link
                      to="/fifthreunion"
                      className="d-flex align-items-center underline"
                    >
                      5th Reunion and 5th Annual General Meeting
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="content">
                <img
                  src={IftarParty}
                  className="card-img-top img-fluid p-2"
                  alt="Iftar Party"
                  style={{ height: 200, width: 240, borderRadius: 10 }}
                />
                <div className="card-body">
                  <h5>
                    <Link
                      to="/iftarparty"
                      className="d-flex align-items-center underline"
                    >
                      IFTAR PARTY - 2022
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="content">
                <img
                  src={FourthReunion}
                  className="card-img-top img-fluid p-2"
                  alt="4th Reunion"
                  style={{ height: 200, width: 240, borderRadius: 10 }}
                />
                <div className="card-body">
                  <h5>
                    <Link
                      to="/fourthreunion"
                      className="d-flex align-items-center underline"
                    >
                      4th Reunion and 4th Annual General Meeting
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
