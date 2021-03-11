import React, {PureComponent} from 'react';

function EnhanceProps(Wrapper){
  return props => {
    return(<Wrapper {...props} local={'中国'}/>)
  }
}

class Home extends PureComponent{
  render() {
    return(
        <div>HOME{`姓名${this.props.name} 年龄${this.props.age} 地区${this.props.local}` }</div>
    )
  }
}

const EnhanceHome = EnhanceProps(Home)

class App extends PureComponent {
  render() {
    return (
        <div>
          <EnhanceHome name={'zp'} age={'18'}/>
        </div>
    );
  }
}


export default App;
