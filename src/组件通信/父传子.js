import React, {Component} from 'react';
class ChildCpn extends Component{
  render() {
    const {name} = this.props //这个props 通过super(this)自动传入了，看上面说明和进阶文件夹中super的说明,父类构造函数的实现call了子类的this
    return (
        <div>
          <h2>子组件展示数据：{name}</h2>
        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
        <div>
          <ChildCpn name={'wo chuan l '}/>
          <ChildCpn name={'我又传了 '}/>
        </div>
    );
  }

}

export default App;
