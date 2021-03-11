import React, {PureComponent} from 'react';


class App extends PureComponent {
  render() {
    return (
        <div>
          App:{this.props.name}
        </div>
    );
  }
}

function enhanceComponent(Wrapper){
  class NewComponent extends PureComponent{
    render() {
      return (<Wrapper {...this.props} />)
    }
  }

  NewComponent.displayName = 'enhance' //这里设置在插件中显示的组件名
  return NewComponent
}


function enhanceComponent2(Wrapper){
  //函数式组件
  function NewComponent(props){
    return (<Wrapper {...props}/>)
  }

  NewComponent.displayName = 'enhance' //这里设置在插件中显示的组件名
  return NewComponent
}
const EnhanceComponent = enhanceComponent(App)
 
export default EnhanceComponent
