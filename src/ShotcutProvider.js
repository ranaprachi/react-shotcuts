import React from "react";
import ShotcutContext from "./ShotcutContext";

export default class ShotcutProvider extends React.Component {
  count = 0;
  state = {
    shotcuts: [],
  }

  addShotcutHandler = (shotcut) => {
    this.count++
    let currCount = this.count;

    this.setState(({ shotcuts }) => ({
      shotcuts: [
        ...shotcuts,
        { id: currCount, ...shotcut }
      ],
    })
    );
    return currCount;
  }

  removeShotcutHandler = (shotcutId) => {
    this.setState(
      ({ shotcuts }) => ({
        shotcuts: shotcuts.filter((s) => s.id !== shotcutId)
      }));
  }

  render() {
    const { shotcuts } = this.state;

    return (
      <ShotcutContext.Provider
        value={{
          shotcuts: shotcuts,
          addShotcut: this.addShotcutHandler,
          removeShotcut: this.removeShotcutHandler
        }}
      >
        {this.props.children}
      </ShotcutContext.Provider>
    );
  }
}
