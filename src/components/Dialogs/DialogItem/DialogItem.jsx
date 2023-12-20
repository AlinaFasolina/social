import React from "react";
import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <img alt="" src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" />
      <NavLink to={`${/dialogs/ + props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
