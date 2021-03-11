import React, {PureComponent} from 'react';

import {addAction, getHomeMultiDateAction} from "./store/actionCreators";

import {connect} from "react-redux";

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeMultiData()
  }

  render() {
    return (
        <div>
          home
          <h2>当前技术{this.props.counter}</h2>
          <button onClick={event => this.props.increment()}>+1</button>
          <button onClick={event => this.props.addNumber(5)}>+5</button>
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
  },
  getHomeMultiData(){
    //注意这里dispatch传入的是redux-thunk特殊的action，是一个函数，上面的是函数的调用
    dispatch(getHomeMultiDateAction)
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
