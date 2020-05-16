import React, { useState } from "react";
import { ISideNavProps } from "../models/components.props";
import { SideNavItem } from "./SideNavItem";
import { Link } from "react-router-dom";

export function SideNav(props: ISideNavProps) {
  const [navLevel] = useState(0);
  return (
    <div className={`side-nav ${props.isMenuOpen ? "show" : "hide"}`}>
      {props.sideNavData.map((item) => (
        <SideNavItem
          currentLanguage={props.currentLanguage}
          key={item["english-name"]}
          item={item}
          navLevel={navLevel}
        />
      ))}
      <div className="donate-button">
        <button className="button button-primary clickable">
          <Link to="/donate-us"> Donate Us</Link>
        </button>
      </div>
    </div>
  );
}
