import React, {Component} from 'react';
import TopBar from "./TopBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex:0
    }
  }


  render() {
    return (
        <div>
          <TopBar topClick={index => this.topClick(index)} list={['新品', '精选', '时尚']}/>
          <h2>{this.state.currentIndex}</h2>
        </div>
    );
  }

  topClick(index){
    console.log(index)
    this.setState({
      currentIndex:index
    })
  }
}

export default App;
