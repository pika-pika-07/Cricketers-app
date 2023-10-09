import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div className="p-5 m-5 bg-gray-300">Cricketer's app</div>;
    </Link>
  );
};

export default Header;
