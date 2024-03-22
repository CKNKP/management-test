import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faChartBar,
  faCalendar,
  faUsers,
  faHome,
  faBackward,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import "./Report.css";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  const handleSignOut = () => {
    navigate("/");
  };

  const handlehome = () => {
    navigate("/home");
  };

  const handleDailyReport = () => {
    navigate("/dailyreport");
  };

  const handleWeeklyReport = () => {
    navigate("/weeklyreport");
  };

  return (
    <>
      <div className="text-center mt-3">
        <h1>Weighbridge Management System</h1>
      </div>
      <div className="report-wrapper">
        <div className="report-container">
          <div className="text-center">
            <h2>Report</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-wrap justify-content-center p-5">
              <div className="report-item m-4">
                <div
                  className="report-item-icon"
                  style={{ backgroundColor: "#fff" }}
                >
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    size="1x"
                    className="report-icon"
                    onClick={handleDailyReport}
                  />
                </div>
                <span className="mt-2">Daily Report</span>
              </div>
              <div className="report-item m-4">
                <div
                  className="report-item-icon"
                  style={{ backgroundColor: "#fff" }}
                >
                  <FontAwesomeIcon
                    icon={faChartBar}
                    size="1x"
                    className="report-icon"
                    onClick={handleWeeklyReport}
                  />
                </div>
                <span className="mt-2">Weekly Report</span>
              </div>
              <div className="report-item m-4">
                <div
                  className="report-item-icon"
                  style={{ backgroundColor: "#fff" }}
                >
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size="1x"
                    className="report-icon"
                  />
                </div>
                <span className="mt-2">Monthly Report</span>
              </div>
              <div className="report-item m-4">
                <div
                  className="report-item-icon"
                  style={{ backgroundColor: "#fff" }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    size="1x"
                    className="report-icon"
                  />
                </div>
                <span className="mt-2">Customized Report</span>
              </div>
            </div>
          </div>
          <div className="fixed-bottom mb-3 d-flex justify-content-center gap-5">
            <button className="report-button" onClick={handlehome}>
              <FontAwesomeIcon icon={faHome} size="lg" />
              <span className="ms-1">Home</span>
            </button>
            <button className="report-button" onClick={handleback}>
              <FontAwesomeIcon icon={faBackward} size="lg" />
              <span className="ms-1">Back</span>
            </button>
            <button className="report-button">
              <FontAwesomeIcon
                icon={faPowerOff}
                size="lg"
                onClick={handleSignOut}
              />
              <span className="ms-1">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
