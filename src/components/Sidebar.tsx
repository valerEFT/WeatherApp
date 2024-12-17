import React from "react";

const Sidebar: React.FC = () => {
  return (
    <ul className="list">
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/ic_round-menu.png"
          alt="menu"
        />
      </li>
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/mage_dashboard-fill.png"
          alt="dashboard"
        />
      </li>
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/uil_calender.png"
          alt="calender"
        />
      </li>
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/solar_map-linear.png"
          alt="solar map linear"
        />
      </li>
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/mingcute_notification-line.png"
          alt="notifications"
        />
      </li>
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/uil_setting.png"
          alt="settings"
        />
      </li>
      <li className="list__item">
        <img
          className="list__item-image"
          src="/images/material-symbols_help.png"
          alt="help"
        />
      </li>
    </ul>
  );
};

export default Sidebar;
