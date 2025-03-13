import React from "react";
import "./Header.css";
import { Nav } from "./Nav/Nav";
import { Search } from "./Search/Search";

export default function Header() {
  return (
    <header>
      <a href={`${process.env.PUBLIC_URL}`}>
        <img src={`${process.env.PUBLIC_URL}/img/logo-sephora.png`} alt="Sephora logo" className="logo"/>
        <img src={`${process.env.PUBLIC_URL}/img/logo-sephora-mobile.png`} alt="Sephora logo" className="mobile-logo"/>
      </a>
      <Search />
      <Nav />
    </header>
  );
}
