import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import { useEffect } from "react";

import {
  faSearch,
  faBell,
  faUserCircle,
  faFileAlt,
  faVideo,
  faMapMarked,
  faExchangeAlt,
  faHome,
  faBackward,
  faPowerOff,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [efficiencyData, setEfficiencyData] = useState([70, 30]);
  const [barChart, setBarChart] = useState(null);
  const [pieChart, setPieChart] = useState(null);

  const handleReportClick = () => {
    navigate("/report");
  };

  const handleCameraClick = () => {
    navigate("/camera");
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const handleSignOut = () => {
    navigate("/");
  };

  const handlehome = () => {
    navigate("/home");
  };

  const handleback = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Create bar graph
    const barCtx = document.getElementById("barGraph");
    const newBarChart = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ], // Updated labels
        datasets: [
          {
            label: "Coal Received",
            data: [100, 200, 150, 300], // Updated data for coal received
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Iron Ore Received",
            data: [150, 100, 250, 200], // Updated data for iron ore received
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Dolomite Received",
            data: [200, 250, 150, 100], // Updated data for dolomite received
            backgroundColor: "rgba(255, 206, 86, 0.5)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return value + " tonnes";
              },
              color: "black",
            },
          },
          x: {
            ticks: {
              color: "black",
            },
          },
        },
      },
    });
    setBarChart(newBarChart);

    // Create pie chart
    const pieCtx = document.getElementById("pieChart");
    const newPieChart = new Chart(pieCtx, {
      type: "doughnut",
      data: {
        labels: ["Efficiency", "Inefficiency"],
        datasets: [
          {
            data: efficiencyData,
            backgroundColor: ["rgb(142,216,183)", "rgb(227,91,109)"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        aspectRatio: 3,
      },
    });
    setPieChart(newPieChart);

    // Cleanup
    return () => {
      if (newBarChart !== null) {
        newBarChart.destroy();
      }
      if (newPieChart !== null) {
        newPieChart.destroy();
      }
    };
  }, [efficiencyData]);

  return (
    <div className="container d-flex flex-column justify-content-between">
      <div>
        <div className="text-center mt-3">
          <h1>Weighbridge Management System</h1>
        </div>
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon icon={faSearch} className="ms-3" size="lg" />
          <FontAwesomeIcon
            icon={faBell}
            className="ms-3"
            size="lg"
            onClick={toggleNotification}
          />
          {showNotification && (
            <div className="notification-popup">
              <h4 className="text-bg-light">Notifications</h4>
              <ul>
                <li>Dummy Notification </li>
                <li>Dummy Notification 2</li>
                <li>Dummy Notification 3</li>
              </ul>
            </div>
          )}
          <FontAwesomeIcon icon={faUserCircle} className="ms-3" size="lg" />
        </div>
        <div className="d-flex flex-column justify-content-start mt-3">
          <div className="card p-3 mb-3" style={{ width: "49.5%" }}>
            <label className="fw-bold">Company:</label>
            <select className="form-select w-100">
              <option value="Vikram Pvt Ltd">Vikram Pvt Ltd</option>
              <option value="Highlander">Highlander</option>
              <option value="Rider">Rider</option>
            </select>

            <label className="fw-bold mt-3">Site:</label>
            <select className="form-select w-100">
              <option>Bhubaneswar</option>
              <option value="Roulkela">Roulkela</option>
              <option value="Aska">Aska</option>
              <option value="Puri">Puri</option>
            </select>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div className="card p-3" style={{ width: "49.5%" }}>
              <div className="chart-container" style={{ height: "300px" }}>
                <canvas id="barGraph"></canvas>
              </div>
            </div>
            <div className="card p-3" style={{ width: "49.5%" }}>
              <div className="chart-container" style={{ marginBottom: "20px" }}>
                <canvas id="pieChart"></canvas>
              </div>
              <div className="text-center mt-3">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ marginRight: "10px" }}>
                    <h4 className="small">Efficiency</h4>
                    <p className="efficiency-number small">
                      {efficiencyData[0]}%
                    </p>
                  </div>
                  <div>
                    <h4 className="small">Inefficiency</h4>
                    <p className="inefficiency-number small">
                      {efficiencyData[1]}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <div
          className="d-flex flex-wrap justify-content-around "
          style={{ maxWidth: "800px" }}
        >
          <div
            className="d-flex flex-column align-items-center mx-4 my-2"
            onClick={handleReportClick}
          >
            <FontAwesomeIcon
              icon={faFileAlt}
              size="1x"
              className="report-icon"
            />
            <span className="mt-1">Report</span>
          </div>
          <div
            className="d-flex flex-column align-items-center mx-4 my-2"
            onClick={handleCameraClick}
          >
            <FontAwesomeIcon icon={faVideo} size="1x" className="camera-icon" />
            <span className="mt-1">Camera</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-4 my-2">
            <FontAwesomeIcon
              icon={faExchangeAlt}
              size="1x"
              className="transaction-icon"
            />
            <span className="mt-1">LiveTransaction</span>
          </div>

          <div className="d-flex flex-column align-items-center mx-4 my-2">
            <FontAwesomeIcon
              icon={faMapMarked}
              size="1x"
              className="location-icon"
            />
            <span className="mt-1">Live Location</span>
          </div>
          <div className="d-flex flex-column align-items-center mx-4 my-2">
            <FontAwesomeIcon icon={faCar} size="1x" className="entry-icon" />
            <span className="mt-1">Vehicle Entry</span>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-3 d-flex justify-content-center gap-5 button-bottom">
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
      </div>
    </div>
  );
}

export default Home;
