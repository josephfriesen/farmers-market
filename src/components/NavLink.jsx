import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink(props) {
  return (
    <li>
      <style jsx> {`
          li {
            padding-right: 8px;
          }
        `}</style>
      <Link to={props.path}>{props.name}</Link>
    </li>
  )
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
export default NavLink;
