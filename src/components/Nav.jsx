import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  let navigate = useNavigate();
  return (
    <Menu>
      <h1
        className="menu-item"
        onClick={() => {
          navigate("../");
        }}
      >
        Home
      </h1>
      <h1
        className="menu-item"
        onClick={() => {
          navigate("../about");
        }}
      >
        About Us
      </h1>
      <h1
        className="menu-item"
        onClick={() => {
          navigate("../events");
        }}
      >
        Events
      </h1>
      <h1
        className="menu-item"
        onClick={() => {
          navigate("../team");
        }}
      >
        Our Team
      </h1>
    </Menu>
  );
}

export default Nav;
