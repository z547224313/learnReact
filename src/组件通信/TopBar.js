import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './topBar.css'

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }


  render() {
    const {list} = this.props
    const {current} = this.state
    return (
        <div className='topBar'>
          {
            list.map((item, index) => {
              return (
                  <div
                      key={item}
                      className={'topBar-item ' + (current === index ? 'active' : '')}
                      onClick={e => this.itemClick(index)}
                  >{item}</div>
              )
            })
          }
        </div>
    );
  }

  itemClick(index) {
    this.setState({
      current: index
    })
    const {topClick} = this.props
    topClick(index)
  }
}

TopBar
    .propTypes = {
  list: PropTypes.array.isRequired
}
export default TopBar;
