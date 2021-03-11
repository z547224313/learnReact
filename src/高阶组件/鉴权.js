import React, {PureComponent} from 'react';

function withAuth(Wrapper){
  return props => {
    const {isLogin} = props
    if(isLogin){
      return (
          <Wrapper {...props}/>
      )
    }else {
      return (
          <LoginPage/>
      )
    }
  }
}

class LoginPage extends PureComponent{
  render() {
    return (
        <div>登录页</div>
    )
  }
}

class Home extends PureComponent
{
  render()
  {//注意这里被传入的都是作为属性
    return (
        <div>首页</div>
    )
  }
}

const HomeAuth = withAuth(Home)

class App extends PureComponent {
  render() {
    return (
        <div>
          <HomeAuth isLogin={true}/>
        </div>
    );
  }
}


export default App;
