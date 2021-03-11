import React, {Component} from 'react';
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
        <div>
          <Navbar leftSlot={<h2>左边</h2>} rightSlot={<h2>右边</h2>} middleSlot={<h2>中间</h2>}/>

        </div>
    );
  }

}

export default App;
