import React from "react";
import ShotcutContext from "./ShotcutContext";

const withShotcuts = (WrappedComponent) => {
  const Component = React.forwardRef((props, ref) => (
    <ShotcutContext.Consumer>
      {({ shotcuts }) => <WrappedComponent {...props} shotcuts={shotcuts} ref={ref} />}
    </ShotcutContext.Consumer>
  ));

  return Component;
};

export default withShotcuts;