import React from "react";
import { reduxForm, Field } from "redux-form";
import withNavigate from "../../history";

class StreamForm extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    this.props.navigate("/");
  };
  render() {
    // const {navigate} = this.props;
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title is required";
  }
  if (!formValues.description) {
    errors.description = "You must put a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate,
})(withNavigate(StreamForm));

// export default connect(null, { createStream: createStream })(formWrapped);
