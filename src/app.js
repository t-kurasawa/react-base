import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './AppComponent.js';

injectTapEventPlugin();
const Mui = () => (
  <MuiThemeProvider>
      <App />
  </MuiThemeProvider>
);

ReactDOM.render(
    <Mui />,
    document.getElementById('root')
);
