import React, {PureComponent} from 'react';
import {StoreContext} from "./context";

// connect是一个函数，返回值是一个高阶组件（高阶组件本身也是一个函数，其返回值是一个新的组件）
export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(Wrapper) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props);
        this.state = {
          //因为简化组件后，使用connect函数使得最后调用的组件是增强后的
          //保证更改后调用render
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        //订阅，保证state更新后重新调用render 函数
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return (
            <Wrapper {...this.props}
                     {...mapStateToProps(this.context.getState())}
                     {...mapDispatchToProps(this.context.dispatch)}/>
        )
      }

    }

    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent
  }
}
