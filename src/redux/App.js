import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Home from "./Home";
import HomeByconnect from "./HomeByconnect";
import AboutByConnect from "./AboutByConnect";
import HomeByReact from './HomeByReact-Redux'
import HomeByThunk from "./HomeByThunk";
import AboutByReact from './AboutByReact-Redux'
import About from "./About";


class App extends PureComponent {
  render() {
    return (
        <div>
          <HomeByThunk/>
          <AboutByReact/>
        </div>
    );
  }
}

App.propTypes = {};

export default App;
