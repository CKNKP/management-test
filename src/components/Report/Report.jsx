import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Report.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  faHome,
  faChartBar,
  faCalendar,
  faUsers,
  faFileAlt,
  faVideo,
  faMapMarked,
  faExchangeAlt,
  faTruck,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

function Report() {
  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/home");
  };

  const handleDailyReport = () => {
    navigate("/dailyreport");
  };

  const handleWeeklyReport = () => {
    navigate("/weeklyreport");
  };

  const handleMonthlyReport = () => {
    navigate("/monthlyreport");
  };

  const handleCustomizedReport = () => {
    navigate("/customizedreport");
  };

  return (
    <>
      <div className="report-header d-flex justify-content-between align-items-center">
        <div></div>
        <h3 className="report-header-title text-center mt-3">Reports</h3>
        <FontAwesomeIcon
          icon={faHome}
          className="daily_report_icon mt-2 "
          onClick={handlehome}
        />
      </div>

      <div className="home-sidebar d-flex flex-column text-center">
        <Link to="/vehicle-entry" className="sidebar-item">
          <FontAwesomeIcon icon={faTruck} className="sidebar-icon" />
          <span className="sidebar-item-text">Vehicle Entered</span>
        </Link>
        <Link to="/live-location" className="sidebar-item">
          <FontAwesomeIcon icon={faMapMarked} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Location</span>
        </Link>
        <Link to="/live-transaction" className="sidebar-item">
          <FontAwesomeIcon icon={faExchangeAlt} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Transaction</span>
        </Link>
        <Link to="/camera" className="sidebar-item">
          <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
          <span className="sidebar-item-text">Camera</span>
        </Link>
        <Link to="/report" className="sidebar-item">
          <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon rp-icon" />
          <span className="sidebar-item-text">Reports</span>
        </Link>
        <Link to="/" className="sidebar-item">
          <FontAwesomeIcon icon={faSignOut} className="sidebar-icon" />
          <span className="sidebar-item-text">Logout</span>
        </Link>
      </div>

      <div className="daily-report-main-content">
        <div className="report-wrapper">
          <div className="report-container">
            <div className="text-center">
              {/* <h3
              className="report-title text-center mt-3 d-flex justify-content-center 
                       align-items-center flex-wrap "
            >
              Report
            </h3> */}
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="d-flex flex-wrap justify-content-center p-5">
                <div className="report-item m-4">
                  <div
                    className="report-item-icon d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      size="1x"
                      className="report-icon"
                      onClick={handleDailyReport}
                    />
                  </div>
                  <span className="mt-2 text-center">Daily Report</span>
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
                  <span className="mt-2 text-center">Weekly Report</span>
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
                      onClick={handleMonthlyReport}
                    />
                  </div>
                  <span className="mt-2 text-center">Monthly Report</span>
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
                      onClick={handleCustomizedReport}
                    />
                  </div>
                  <span className="mt-2 text-center">Customized Report</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mb-3 d-flex justify-content-center gap-5 button-bottom fixed-bottom">
          <button className="icon-button" onClick={handlehome}>
            <FontAwesomeIcon icon={faHome} size="lg" />
            <span className="ms-1">Home</span>
          </button>
          <button className="icon-button" onClick={handleback}>
            <FontAwesomeIcon icon={faBackward} size="lg" />
            <span className="ms-1">Back</span>
          </button>
          <button className="icon-button" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faPowerOff} size="lg" />
            <span className="ms-1">Sign Out</span>
          </button>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Report;
