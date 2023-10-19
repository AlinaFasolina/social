import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friend from "../Friends/Friend/Friend";

const Navbar = (props) => {

  console.log("props", props);
  return (
    <nav className={classes.nav}>
      <div>
        <div className={`${classes.item} ${classes.plus}`}>
          <NavLink
            className={(isActive) =>
              !isActive.isActive ? "" : classes.activeLink
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={(isActive) =>
              !isActive.isActive ? "" : classes.activeLink
            }
            to="/dialogs"
          >
            Dialogs
          </NavLink>
        </div>
        <div className={classes.item}>
          <a href="#">News</a>
        </div>
        <div className={classes.item}>
          <a href="#">Music</a>
        </div>
        <div className={classes.item}>
          <a href="#">Settings</a>
        </div>
      </div>
      <div>
        <h2>Friends</h2>
        <div className={classes.friends}>
          {props.friends.map((item) => {
            return <Friend name={item.name}/>;
          })}
        </div>
        {/* sidebar: {
    friends: [
      {id: 1, name: "Nastya"},
      {id: 2, name: "Stasya"},
      {id: 2, name: "Dave"},
    ]
  } */}
      </div>
    </nav>
  );
};

export default Navbar;
