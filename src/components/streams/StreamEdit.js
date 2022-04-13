import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, updateStream } from "../../actions";
import withNavigate from "../../history";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    // console.log(this.props.params.id);
    this.props.fetchStream(this.props.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.params.id, formValues);
  };
  render() {
    const { id } = this.props.params;
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")} //Special: provided by redux form
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] };
};

export default withNavigate(
  connect(mapStateToProps, {
    fetchStream: fetchStream,
    editStream: updateStream,
  })(StreamEdit)
);
