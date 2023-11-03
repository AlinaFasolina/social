import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let textareaRef = React.createRef();

  let addPostHandler = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  let onChangeHandler = () => {
    let textareaValue = textareaRef.current.value;
    let action = updateNewPostTextActionCreator(textareaValue);
    props.dispatch(action);
  };

  return (
    <div>
      <h1>My posts</h1>

      <div className={classes.my_posts}>
        <div>
          <textarea
            onChange={onChangeHandler}
            ref={textareaRef}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPostHandler}>Add post</button>
        </div>
      </div>

      <div>
        {props.postsList.map((item) => (
          <Post likesCount={item.likesCount} message={item.message} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
