import React, {Component} from 'react';

const UserContext = React.createContext({
  name:'默认',
  age:'18'
})

const ThemeContext = React.createContext({
  color:'red'
})
function ProfileHeader (){
  return(
      <UserContext.Consumer>
        {
          value => {
            return(
                <ThemeContext.Consumer>
                  {
                    theme =>{
                      return(
                          <div>
                            我是孙子
                            <div style={{color:theme.color}}>name:{value.name}</div>
                            <div>age:{value.age}</div>
                          </div>
                      )
                    }
                  }
                </ThemeContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
  )
}

function Profile (){
  return(
      <div>
        <div>我是儿子</div>
        <ProfileHeader/>
      </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      name:'aaa',
      age:18
    }
  }

  render() {
    return (
        <div>
          <UserContext.Provider value={this.state}>
            <ThemeContext.Provider theme={{color:'red'}}>
              <Profile/>
            </ThemeContext.Provider>
          </UserContext.Provider>
        </div>
    );
  }
}

export default App;
