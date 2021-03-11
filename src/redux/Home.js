import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import store from "./store";
import {addAction} from "./store/actionCreators";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }


  componentDidMount() {
   this.unsubscribe = store.subscribe(()=>{
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    //取消订阅
    this.unsubscribe()
  }

  render() {
    return (
        <div>
          home
          <h2>当前技术{this.state.counter}</h2>
          <button onClick={event => this.increment()}>+1</button>
          <button onClick={event => this.addNumber(5)}>+5</button>
        </div>
    );
  }
  increment(){
    store.dispatch(addAction(1))
  }
  addNumber(num){
    store.dispatch(addAction(num))
  }
}

Home.propTypes = {};

export default Home;
