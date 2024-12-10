import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark">
      <h3 className="sidebar-title text-white py-3 px-4">Dashboard</h3>
      <ul className="nav flex-column">
        {[
          { icon: "calendar-alt", label: "Schedule Meeting" },
          { icon: "tasks", label: "Manage Meetings" },
          { icon: "users", label: "Users & Permissions" },
          { icon: "bell", label: "Notifications" },
          { icon: "chart-bar", label: "Analytics" },
          { icon: "cog", label: "Settings" },
        ].map((item, index) => (
          <li key={index} className="nav-item">
            <a className="nav-link text-white px-4" href="#">
              <i className={`fas fa-${item.icon} me-2`}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
