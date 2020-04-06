import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  
  }

  handleLogin = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input onChange={this.onChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
