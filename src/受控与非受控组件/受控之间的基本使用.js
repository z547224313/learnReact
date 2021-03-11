import React, {PureComponent} from 'react';

class APP extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username:''
    }
  }

  render() {
    return (
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
            <label htmlFor="username">
              用户:
              <input
                  type="text"
                  id='username'
                  onChange={e => this.handleChange(e)}
                  value={this.state.username}
              />
            </label>
            <input type="submit" value='提交'/>
          </form>
        </div>
    );
  }
  handleChange(e){
    this.setState({
      username:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()//提交刷新默认干掉
    console.log(this.state.username)
  }
}


export default APP;
