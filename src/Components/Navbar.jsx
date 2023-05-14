import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        padding: "10px",
        color: "white",
        backgroundColor: "teal",
        fontSize: "20px",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/player">Player</Link>
    </div>
  );
};

export default Navbar;
