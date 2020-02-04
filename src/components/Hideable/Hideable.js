import React, { Component } from "react";
import PropTypes from "prop-types";

class Hideable extends Component {
  static propTypes = {
    isHidden: PropTypes.bool.isRequired
  };

  state = { isHidden: this.props.isHidden };

  render = () => {
    return (
      <div className="container">
        <button className="button" onClick={() => this.toggleButton()}>
          {this.resolveButtonLabel()}
        </button>
        <div style={{ visibility: this.resolveVisibility() }}>
          {this.props.children}
        </div>
      </div>
    );
  };

  resolveButtonLabel = () =>
    this.state.isHidden ? "Show content" : "Hide content";

  resolveVisibility = () => (this.state.isHidden ? "hidden" : "visible");

  toggleButton = () => this.setState({ isHidden: !this.state.isHidden });
}

export default Hideable;
