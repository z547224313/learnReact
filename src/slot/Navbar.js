import React, {Component} from 'react';
import './Navbar.css'
class Navbar extends Component {
  render() {
    const {leftSlot, rightSlot, middleSlot} = this.props
    return (
        <div className='navbar'>
          <div className="left">{leftSlot}</div>
          <div className="middle">{rightSlot}</div>
          <div className="right">{middleSlot}</div>
        </div>
    );
  }
}

export default Navbar;
