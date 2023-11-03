import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log('props in Profile', props)
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts
        dispatch={props.dispatch}
        newPostText={props.newPostText}
        postsList={props.postsList}
      />
    </div>
  );
};

export default Profile;
