import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength30]}
          placeholder="Post message"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const ProfileAddPostFormRedux = reduxForm({
  form: "profileAddPostForm",
})(AddPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (value) => {
  
    props.addPost(value.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <ProfileAddPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
