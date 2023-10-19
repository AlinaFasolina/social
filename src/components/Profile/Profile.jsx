import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText}
        addPost={props.addPost}
        postsList={props.postsList}
      />
    </div>
  );
};

export default Profile;
