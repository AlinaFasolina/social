import classes from "./Post.module.css";

const Post = (props ) => {
  return (
    <div className={classes.post}>
      <img alt="" src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" />
      <p className={classes.post_name}>{props.message}</p>
      <p>{props.likesCount} Likes</p>
    </div>
  );
};

export default Post;
