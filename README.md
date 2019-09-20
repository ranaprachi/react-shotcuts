<div align="center">

## React Shotcuts
#### A react keyboard shotcuts library

</div>

# Installation

``` bash
npm install -S react-shotcuts-library
```

# Usage

Wrap your App component with ShotcutProvider (this would allow you to access you shotcuts listeners information thoughout your application)
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ShotcutProvider } from "react-shotcuts-library";
import App from './App';

ReactDOM.render(
  <ShotcutProvider>
    <App />
  </ShotcutProvider>
  , document.getElementById('root')
);
```

Import and use the components in your App.js
```js
import React from "react";
import { Shotcut } from "react-shotcuts-library";

export default class MyComponent extends React.Component {
  handleShotcutEvent = () => {
    // Handle shotcut event
  }

  render() {
    return (
      <div>
        // ...
        <Shotcut
          shotcut={"ctlr+a"}                  // Shotcut key combination separated by '+'
          handler={this.handleShotcutEvent}   // Shotcut event handler
          description={"Select all content"}  // Describe what happens when event occurs
        />
      </div>
    )
  }
}
```

To show a help section to the user, import withShotcuts and use the components in your Help.js
```js
// Help.js
import React from "react";
import { withShotcuts } from "react-shotcuts-library";

const Help = ({ shotcuts }) => {
  return (
    <div>
      {shotcuts.map((shotcut) => (
        <div key={shotcut.id}>
          <strong>
            {shotcut.shotcut}
          </strong>:
          {shotcut.description}
        </div>
      ))}
    </div>
  )
}

export default withShotcuts(Help);   // withShotcuts passes a prop shotcuts to the component
```

# Setup
Use this [demo app](https://codesandbox.io/s/react-shotcuts-demo-y20k6?fontsize=14) for your refernce.
