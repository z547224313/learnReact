import React, {Component} from 'react';

function Cpn(props){
  const {addClick} = props
  return (
      <button onClick={addClick}>+1</button>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
        <div>
          <h2>{this.state.counter}</h2>
          <Cpn addClick={e=>this.add()}/>
        </div>
    );
  }

  add(){
    this.setState({
      counter:this.state.counter + 1
    })
  }
}

export default App;
