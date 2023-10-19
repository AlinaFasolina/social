import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log("props in MyPosts=", props);
  let textareaRef = React.createRef();

  let addPostHandler = () => {
    props.addPost();
  };

  let onChangeHandler = () => {
    let textareaValue = textareaRef.current.value;
    props.updateNewPostText(textareaValue);
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
