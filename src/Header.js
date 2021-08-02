import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "./Datalayer";

function Header() {
  const [{ isLogin }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <Link to="/" className="logo">
        Room
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        {!isLogin && (
          <>
            <Link to="/login" className="navLink">
              Login
            </Link>
            <Link to="/signup" className="navLink">
              SignUp
            </Link>
          </>
        )}
        {isLogin && (
          <>
            {" "}
            <Link to="/myroom" className="navLink">
              My Booking
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
