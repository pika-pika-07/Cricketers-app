import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 m-5 bg-gray-300  flex ">
      <Link to="/">
        <img
          alt="Cricket-Image"
          className="w-40"
          src="https://t3.ftcdn.net/jpg/02/02/27/68/240_F_202276862_Bl20MC12CxPZAr781Sctf37otHIwSvBU.jpg"
        />
      </Link>
      <h4 className="p-10 font-bold text-center align-middle">
        {" "}
        Cricketer's app
      </h4>
    </div>
  );
};

export default Header;
