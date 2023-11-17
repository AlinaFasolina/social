import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import ContextStore from "../../../StoreContext";

const MyPostsContainer = (props) => {
  console.log("props in MyPostsContainer", props);

  return (
    <ContextStore.Consumer>
      {(store) => {
        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };

        let onChangeHandler = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        let state = store.getState();

        return (
          <MyPosts
            updateNewPostText={onChangeHandler}
            postsList={state.profilePage.postsList}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
          />
        );
      }}
    </ContextStore.Consumer>
  );
};

export default MyPostsContainer;
