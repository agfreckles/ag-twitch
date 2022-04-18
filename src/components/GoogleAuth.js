import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    let gapi = window.gapi;
    gapi.load("auth2", () => {
      gapi.auth2
        .init({
          client_id:
            "308521735279-ina4hb2rr55dl6m3tthagnm2hcfo30v8.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            onClick={() => this.auth.signOut()}
            className="ui google red button "
          >
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={() => this.auth.signIn()}
            className="ui google green button"
          >
            <i className="google icon" />
            Sign in with google
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()} </div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(
  GoogleAuth
);
//308521735279-ina4hb2rr55dl6m3tthagnm2hcfo30v8.apps.googleusercontent.com
//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308521735279-ina4hb2rr55dl6m3tthagnm2hcfo30v8.apps.googleusercontent.com
