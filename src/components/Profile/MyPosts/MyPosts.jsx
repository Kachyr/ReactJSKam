import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <ProfileAddPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText'
          
        />
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  );
};

const ProfileAddPostFormRedux = reduxForm({
  form: "profileAddPostForm",
})(AddPostForm);

export default MyPosts;
