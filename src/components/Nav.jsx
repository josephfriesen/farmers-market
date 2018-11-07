import React from "react";
import NavLink from "./NavLink";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <div>
      <style jsx>{`
          ul {
            list-style: none;
            display: flex;
          }
          div {
            width: 100%;
            border-bottom: 1px solid black;
            position: fixed;
            top: 0
          }
        `}</style>
      <ul>
        <NavLink
          name="Home"
          path="/" />
        <NavLink path="/schedule" name="Schedule"/>
        <NavLink
          name="Produce"
          path="/produce" />
      </ul>
    </div>
  )
}

export default Nav;
