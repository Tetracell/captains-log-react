import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/logs">Logs</Link>
      <Link to="/logs/new">New Log</Link>
    </>
  );
};

export default Nav;
