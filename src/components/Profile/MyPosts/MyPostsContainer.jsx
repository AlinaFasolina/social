import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  console.log("props in MyPostsContainer", props);
  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onChangeHandler = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onChangeHandler}
      postsList={state.profilePage.postsList}
      newPostText={state.profilePage.newPostText}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
