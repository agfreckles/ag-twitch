import React from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../../actions";
import withNavigate from "../../history";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer() {
    const { id } = this.props.params;
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.stream) {
      return <div> Loading . . . show!! </div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] };
};
export default withNavigate(
  connect(mapStateToProps, { fetchStream })(StreamShow)
);
