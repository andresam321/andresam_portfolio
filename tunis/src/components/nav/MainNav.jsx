import React from "react";
import { NavLink } from "react-router-dom";
import SwitchDark from "../switch/SwitchDark";

const menuItems = [
  { to: "/", label: "Home", icon: "fa-home", end: true },
  { to: "/about", label: "About", icon: "fa-user" },
  { to: "/experience", label: "Experience", icon: "fa-history" },
  { to: "/projects", label: "Projects", icon: "fa-briefcase" },
  { to: "/contact", label: "Contact", icon: "fa-envelope-open" },
];

// Reuses the template's existing .header / .icon-menu / .icon-box markup and
// CSS so the desktop sidebar + mobile bottom nav keep working without new
// styles. react-tabs previously applied "react-tabs__tab--selected" to mark
// the active item; NavLink's isActive is mapped to the same class name so
// the existing skin CSS (main/skins/_yellow.scss, main/_style.scss) applies
// unchanged.
//
// Labels render as a plain <span> ("icon-box-label"), not a heading — these
// are navigation-link text, not document headings, and rendering them as
// <h2> made every route's heading outline start with five nav headings
// before the page's actual content heading.
const MainNav = () => {
  return (
    <nav className="header" aria-label="Main navigation">
      <ul className="icon-menu revealator-slideup revealator-once revealator-delay1">
        {menuItems.map((item) => (
          <li key={item.to} className="icon-box">
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "react-tabs__tab--selected" : undefined
              }
            >
              <i className={`fa ${item.icon}`} aria-hidden="true"></i>
              <span className="icon-box-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
        <li className="icon-box nav-theme-toggle">
          <SwitchDark />
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
