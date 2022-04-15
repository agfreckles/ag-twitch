import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { deleteStream, fetchStream } from "../../actions";
import Modal from "../Modal";
import withNavigate from "../../history";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    fetchStream(this.props.stream.id);
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete ?";
    }
    return `Are sure you want to delete ${this.props.stream.title} ? `;
  }
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteStream(this.props.stream.id);
            this.props.navigate("/");
          }}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  render() {
    // const navigate = useNavigate();

    return (
      <Modal
        title="Stream Delete"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => this.props.navigate("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.params.id],
  };
};

export default withNavigate(
  connect(mapStateToProps, {
    fetchStream: fetchStream,
    deleteStream: deleteStream,
  })(StreamDelete)
);
