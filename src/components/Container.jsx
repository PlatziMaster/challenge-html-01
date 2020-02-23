import React from "react";
import "../assets/styles/components/Container.styl";
import "../assets/styles/components/Card.styl";

const Container = ({ children }) => (
  <main className="container">{children}</main>
);

export default Container;
