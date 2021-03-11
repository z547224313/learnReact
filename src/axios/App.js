import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";


class App extends PureComponent {

  componentDidMount() {
    axios({
      url:'https://httpbin.org/get',
      params:{
        name:'zhangpeng',
        age:18
      }
    }).then(res=>{
      console.log(res)
    })
  }

  render() {
    return (
        <div>

        </div>
    );
  }
}

App.propTypes = {};

export default App;
