import React from "react";
import '../styles/components/Header.styl'
import Items from "./Items";

const Header = () => {
  return (
    <div className="container">
      <h1>Deck</h1>
      <Items className="navbar" />
    </div>
  )
}

export default Header