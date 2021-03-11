import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        {name: '张三', age: 18},
        {name: '张4', age: 11},
        {name: '张5', age: 15},
        {name: '张6', age: 12}
      ]
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(nextState.friends!==this.state.friends){
      return true
    }

    return false
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.friends.map(item => {
              return (<li key={item.age}>{item.name} {item.age}</li>)
            })
            }
          </ul>
          <button onClick={e => this.insert()}>添加</button>
        </div>
    );
  }

  insert(){
    //不推荐做法,SCU优化无法识别，指针的问题
    const newItem = {name:'lisi',age:222}
    // this.state.friends.push(newItem)
    // this.setState({
    //   friends:this.state.friends
    // })

    //推荐
    const newFriend = [...this.state.friends]
    newFriend.push(newItem)
    this.setState({
      friends:newFriend
    })
  }
}

export default App;
