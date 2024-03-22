import React, { useState } from "react";
import truckImage from "../../assets/truck-image.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Weighbridge Management System</h1>
          <img src={truckImage} alt="Truck" className="login-truck-image" />
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="User Id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="form-control login-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control login-input"
              />
            </div>
            <button type="submit" className="btn btn-primary login-btn">
              Sign In
            </button>
            <a href="#" className="login-forgot-password">
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;