import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import store from "./store";
import {addAction} from "./store/actionCreators";
import {connect} from "react-redux";

class About extends PureComponent {
  render() {
    return (
        <div>
          About
          <h2>当前技术{this.props.counter}</h2>
          <button onClick={event => this.props.increment()}>+1</button>
          <button onClick={event => this.props.addNumber(-4)}>-4</button>
          <ul>
            {
              this.props.banners.map((item, index)=>{
                return (
                    <li key={item.acm}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
    );
  }

}

const mapStateToProps = state =>({
  counter:state.counter,
  banners:state.banners
})

const mapDispatchToProps = dispatch => ({
  increment(){
    dispatch(addAction(1))
  },
  addNumber(num){
    dispatch(addAction(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(About);
