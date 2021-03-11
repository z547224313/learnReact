import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:'hello',
      counter:0
    }
  }



  render() {
    console.log('render')
    return (
        <div>
          <h2>{this.state.counter}</h2>
          <button onClick={e => this.btnClick()}>+1</button>
          <button onClick={e => this.changeMessage()}>change</button>
        </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(nextState.counter !== this.state.counter){
      return true
    }
    return false
  }

  btnClick(){
    this.setState({
      counter:this.state.counter+1
    })
  }
  changeMessage(){
    this.setState({
      message:'11111'
    })
  }
}

export default App;
