import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img alt="" src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" />
      <p>{props.name}</p>
    </div>
  );
};

export default Friend;
