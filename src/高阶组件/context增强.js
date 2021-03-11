import React, {PureComponent, createContext} from 'react';

const UserContext = createContext({
  name: 'zhangpeng',
  age: 18,
  height: 1.80
})

function enhanceUser(Wrapper) {
  return props => { //这里都作为属性传入
    return (
        <UserContext.Consumer>
          {
            value => {
              return (
                  <Wrapper {...props} {...value}/>
              )
            }
            }
            </UserContext.Consumer>
            )
          }
}

// class Home extends PureComponent
//   {
//     render()
//     {
//       return (
//           <UserContext.Consumer>
//             {
//               value => {
//                 return (
//                     <div>
//                       {`姓名 ${value.name} 年龄 ${value.age} 身高 ${value.height}`}
//                     </div>
//                 )
//               }
//             }
//           </UserContext.Consumer>
//       )
//     }
//   }


class Home extends PureComponent
  {
    render()
    {//注意这里被传入的都是作为属性
      return (
          <div>{`姓名 ${this.props.name} 年龄 ${this.props.age} 身高 ${this.props.height}`}</div>
      )
    }
  }
  const EnhanceHome = enhanceUser(Home)

class App extends PureComponent
  {
    constructor(props)
    {
      super(props);

      this.state = {
        user: {
          name: 'zp',
          age: 22,
          height: 1.79
        }
      }
    }

    render()
    {
      return (
          <div>
            <UserContext.Provider value={this.state.user}>
              <Home/>
              <EnhanceHome/>
            </UserContext.Provider>
          </div>
      );
    }
  }

export default App;
