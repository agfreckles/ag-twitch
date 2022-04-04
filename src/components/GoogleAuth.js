import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "308521735279-ina4hb2rr55dl6m3tthagnm2hcfo30v8.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return;
    } else if (this.state.isSignedIn) {
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
export default GoogleAuth;
//308521735279-ina4hb2rr55dl6m3tthagnm2hcfo30v8.apps.googleusercontent.com
//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308521735279-ina4hb2rr55dl6m3tthagnm2hcfo30v8.apps.googleusercontent.com
