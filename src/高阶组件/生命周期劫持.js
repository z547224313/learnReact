import React, {PureComponent} from 'react';

function withRenderTime(Wrapper){
  return class extends PureComponent{
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }
    componentDidMount() {
      this.endTime = Date.now()
      console.log(`${Wrapper.name}的渲染时间是${this.endTime-this.beginTime}`)
    }

    render() {
      return(
          <Wrapper {...this.props}/>
      )
    }
  }
}

class Home extends PureComponent
{
  render()
  {//注意这里被传入的都是作为属性
    return (
        <div>Home</div>
    )
  }
}

const TimeHome = withRenderTime(Home)

class App extends PureComponent {
  render() {
    return (
        <div>
          <TimeHome/>
        </div>
    );
  }
}


export default App;
