import React from "react";
import PropTypes from "prop-types";
import hotkeys from "hotkeys-js";
import ShotcutContext from "./ShotcutContext";

class Shotcut extends React.Component {
  componentDidMount() {
    const { shotcut, description, handler } = this.props;
    hotkeys(shotcut, handler);
    this.shotcutId = this.context.addShotcut({
      shotcut,
      description,
    });
  }

  componentWillUnmount() {
    this.context.removeShotcut(this.shotcutId);
  }

  render() {
    return null;
  }
}

Shotcut.contextType = ShotcutContext;

Shotcut.propTypes = {
  shotcut: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
}

export default Shotcut;