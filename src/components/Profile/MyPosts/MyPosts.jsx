import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  console.log("props in MyPosts",props);

  let textareaRef = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange= () => {
    let text = textareaRef.current.value;
    props.onChangeHandler(text);
  };

  return (
    <div>
      <h1>My posts</h1>

      <div className={classes.my_posts}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={textareaRef}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
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
