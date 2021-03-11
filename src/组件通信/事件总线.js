import React, {PureComponent} from 'react';
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()

class Project extends PureComponent {
  render() {
    return (
        <div>
          Project
          <button onClick={e => this.emitEvent()}>发送事件</button>
        </div>
    )
  }

  emitEvent(){
    eventBus.emit('sayHello','我是project','123','xxxx',[1231])
  }
}

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener('sayHello',this.handleSayHelloListener)
  }
  componentWillUnmount() {
    eventBus.removeListener('sayHello',this.handleSayHelloListener)
  }
  handleSayHelloListener(message,num,...args){
    console.log(message, num, args)
  }
  render() {
    return (
        <div></div>
    )
  }
}

class App extends PureComponent {
  render() {
    return (
        <div>
          <Home/>
          <Project/>
        </div>
    );
  }
}


export default App;
