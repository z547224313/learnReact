import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import store from "./store";
import {addAction} from "./store/actionCreators";
import {connect} from "./utils/connect";

class About extends PureComponent {
  render() {
    return (
        <div>
          About
          <h2>当前技术{this.props.counter}</h2>
          <button onClick={event => this.props.increment()}>+1</button>
          <button onClick={event => this.props.addNumber(-4)}>-4</button>
        </div>
    );
  }

}

const mapStateToProps = state =>({
  counter:state.counter
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
