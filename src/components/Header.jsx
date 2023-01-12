import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <NavLink to={"/"}>Customers</NavLink>
        <NavLink to={"/addcustomer"}>Add Customers</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
      </ul>
    </div>
  );
}

export default Header;
