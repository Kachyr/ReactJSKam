import React from "react";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default AddMessageForm;
