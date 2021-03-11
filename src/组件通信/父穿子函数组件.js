import React, {Component} from 'react';
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const {name} = props

  return (
      <h2>函数{name}</h2>
  )
}

ChildCpn.propTypes =
    {
      name: PropTypes.string
    }

ChildCpn.defaultProps =
    {
      name:'默认值'
    }

class App extends Component {
  render() {
    return (
        <div>
          <ChildCpn/>
          <ChildCpn name={'我又传了 '}/>
        </div>
    );
  }

}

export default App;
