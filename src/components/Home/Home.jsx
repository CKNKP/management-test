import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  faSearch,
  faBellSlash,
  faUserCircle,
  faFileAlt,
  faVideo,
  faMapMarked,
  faExchangeAlt,
  faTruck,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function Home() {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (chartRef.current?.chartInstance && chartRef2.current?.chartInstance) {
        chartRef.current.chartInstance.resize();
        chartRef2.current.chartInstance.resize();
      }
    });

    resizeObserver.observe(document.querySelector(".home-main-content"));

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="home-page">
      <div className="home-header d-flex justify-content-center">
        <h3 className="home-header-title text-4xl text-center text-uppercase text-white mt-3 d-flex justify-content-center align-items-center flex-wrap">
          Weighbridge Management System
        </h3>
      </div>
      <div className="home-logo-container-1 container-fluid">
        <div className="row justify-content-end">
          <div className="col-auto">
            <FontAwesomeIcon
              icon={faSearch}
              className="header-icon mx-2"
              style={{ fontSize: "1.2rem" }}
            />
            <FontAwesomeIcon
              icon={faBellSlash}
              onClick={toggleNotification}
              className="header-icon mx-2"
              style={{ fontSize: "1.2rem" }}
            />
            {showNotification && (
              <div className="notification-popup mt-3">
                <ul>
                  <li>Dummy Notification 1</li>
                  <li>Dummy Notification 2</li>
                  <li>Dummy Notification 3</li>
                  <li>Dummy Notification 4</li>
                </ul>
              </div>
            )}
            <FontAwesomeIcon
              icon={faUserCircle}
              className="header-icon mx-2"
              style={{ fontSize: "1.2rem" }}
            />
          </div>
        </div>
      </div>
      <div className="home-sidebar d-flex flex-column text-center">
        <Link to="/report" className="sidebar-item ">
          <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
          <span className="sidebar-item-text">Reports</span>
        </Link>
        <Link to="/camera" className="sidebar-item">
          <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
          <span className="sidebar-item-text">Camera</span>
        </Link>
        <Link to="/live-location" className="sidebar-item">
          <FontAwesomeIcon icon={faMapMarked} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Location</span>
        </Link>
        <Link to="/live-transaction" className="sidebar-item">
          <FontAwesomeIcon icon={faExchangeAlt} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Transaction</span>
        </Link>
        <Link to="/vehicle-entry" className="sidebar-item">
          <FontAwesomeIcon icon={faTruck} className="sidebar-icon" />
          <span className="sidebar-item-text">Vehicle Entry</span>
        </Link>
        <Link to="/" className="sidebar-item">
          <FontAwesomeIcon icon={faSignOut} className="sidebar-icon" />
          <span className="sidebar-item-text">Logout</span>
        </Link>
      </div>
      <div className="home-main-content">
        <div className="card p-3 mb-3 home home-card mt-3">
          <label className="fw-bold home-label">Company:</label>
          <select className="form-select w-100">
            <option value="Vikram Pvt Ltd">Vikram Pvt Ltd</option>
            <option value="Highlander">Highlander</option>
            <option value="Rider">Rider</option>
          </select>
          <label className="fw-bold mt-3 home-label">Site:</label>
          <select className="form-select w-100">
            <option>Bhubaneswar</option>
            <option value="Roulkela">Roulkela</option>
            <option value="Aska">Aska</option>
            <option value="Puri">Puri</option>
          </select>
        </div>
        <div className="card-group d-flex">
          <div className="card p-3 mb-3 home home-chart-1 mt-3">
            <Bar
              className="chart-1"
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Coal",
                    data: [12, 19, 3, 5, 2, 3, 45],
                    backgroundColor: "rgb(27,32,38)",
                  },
                  {
                    label: "Iron Ore",
                    data: [12, 9, 3, 5, 2, 3, 5],
                    backgroundColor: "rgb(212,208,199)",
                  },
                  {
                    label: "Dolomite",
                    data: [12, 19, 3, 5, 2, 3, 45],
                    backgroundColor: "rgb(169,169,167)",
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function (value) {
                        return value + " tonnes";
                      },
                    },
                  },
                },
              }}
              ref={chartRef}
            />
            <span className="text-center mt-2 chart-name-1">
              Number of materials recieved
            </span>
          </div>
          <div className="card p-3 mb-3 home home-chart-2 mt-3 mx-5">
            <Bar
              className="chart-2"
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Inbound",
                    data: [12, 19, 3, 5, 2, 3, 45],
                    backgroundColor: "rgb(123,222,123)",
                  },
                  {
                    label: "Outbound",
                    data: [12, 9, 3, 5, 2, 3, 5],
                    backgroundColor: "rgb(255,110,102)",
                  },
                ],
              }}
              ref={chartRef2}
            />
            <span className="text-center mt-2 chart-name-2">
              Number of Trucks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
