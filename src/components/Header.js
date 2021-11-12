import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/tenant") {
      setActiveTab("Tenant");
    } else if (location.pathname === "/user") {
      setActiveTab("User");
    }
  }, [location]);

  
  return (
    <div className="header">
      <p className="logo"> App</p>
      <div className="header-right">
       
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/tenant">
          <p
            className={`${activeTab === "Tenant" ? "active" : ""}`}
            onClick={() => setActiveTab("Tenant")}
          >
           Tenant List
          </p>
        </Link>
        <Link to="/user">
          <p
            className={`${activeTab === "User" ? "active" : ""}`}
            onClick={() => setActiveTab("User")}
          >
           User List
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;