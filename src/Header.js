import React from "react";
import "./Header.css";
import facebook from "./images/facebook.png";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img className="logo" src={facebook} alt="facebook-logo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />

          <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="header__right">
       <Avatar /> <h4>Kraig</h4>
        <div className="header__info">
          
          
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
