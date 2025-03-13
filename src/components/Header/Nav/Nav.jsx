import React from "react";
import "./Nav.css";
import { NavItem } from "./NavItem/NavItem";

export function Nav() {
  return (
    <nav>
      <ul>
        <NavItem
            link="#"
            icon={`${process.env.PUBLIC_URL}/img/shop-and-services.svg`}
            title="Shops and Services"
            subTitle="Choose your store"
            responsive={true}
        />
        <NavItem
            link="#"
            icon={`${process.env.PUBLIC_URL}/img/community-icon.svg`}
            title="Community"
            responsive={true}
        />
        <NavItem
            link="#"
            icon={`${process.env.PUBLIC_URL}/img/login-icon.svg`}
            title="Log in"
            subTitle="for FREE delivery &#x1F69A;"
            responsive={true}
        />
        <div className="flex-expander" />
        <NavItem
            link="#"
            icon={`${process.env.PUBLIC_URL}/img/heart-icon.svg`}
        />
        <NavItem
            link="#"
            icon={`${process.env.PUBLIC_URL}/img/busket-icon.svg`}
        />
      </ul>
    </nav>
  );
}
