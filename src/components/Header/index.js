import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Reddit } from "icons/reddit.svg";
import { ReactComponent as Settings } from "icons/settings.svg";
import { ReactComponent as User } from "icons/user.svg";

import { NavLink } from "react-router-dom";
import { headerRoutes } from "routes";
const Header = () => {
  const { isAuthenticated } = useSelector(({ main }) => ({
    isAuthenticated: main.isAuthenticated,
  }));

  const [isHeaderOpen, toogleHeader] = useState(false);

  return (
    <div
      onMouseLeave={() => toogleHeader(false)}
      onMouseEnter={() => toogleHeader(true)}
      className={`header header--${isHeaderOpen ? "open" : "closed"}`}
    >
      <div>
        <div className="header-logo">
          <Reddit className="header-logo-icon" />
          {isHeaderOpen && <div className="header-logo-title">reddit</div>}
        </div>
        <div className="header-links">
          {headerRoutes.map(({ title, Icon, path, exact }) => (
            <NavLink
              key={title}
              to={path}
              exact={exact}
              className="header-link"
              activeClassName="header-link--active"
            >
              <Icon className="header-link-icon" />
              {isHeaderOpen && <div className="header-link-title">{title}</div>}
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        {isAuthenticated ? (
          <div
            className={`header-footer-buttons ${
              !isHeaderOpen ? "header-footer-buttons--closed" : ""
            }`}
          >
            <div
              className={`header-footer-icon--button header-footer-icon--button--${
                !isHeaderOpen ? "small" : ""
              }`}
            >
              <Settings className="icon" />
            </div>
            <div
              className={`header-footer-icon--button header-footer-icon--button--${
                !isHeaderOpen ? "small" : ""
              }`}
            >
              <User className="icon" />
            </div>
          </div>
        ) : null}

        {!isAuthenticated && isHeaderOpen ? (
          <div className="header-footer-buttons">
            <div className="simple-button">Register</div>
            <div className="simple-button">Login</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
