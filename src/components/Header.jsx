import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <Link to={"/"}>Customers</Link>
        <Link to={"/addcustomer"}>Add Customers</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </ul>
    </div>
  );
}

export default Header;
