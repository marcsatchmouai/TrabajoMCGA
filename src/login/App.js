import React, {Component} from 'react';

class Login extends React.Component {
    state = {
        titulo: "Login",
        email: undefined,
        password: undefined,
        loginSuccess: false,
        message: undefined
      }
      onChangeEmail = (e) => {
          this.setState()
      }
      render() {
        console.log('Se esta dibujando el componente')
          return(
            <div className="App-header">
              <form>
                <div>
                  <input 
                  className="App-input" 
                  type="text" 
                  name="email" 
                  placeholder="Email"
                  value={this.state.value} 
                  onChange={this.handleChange} />
                </div>
                <div>
                  <input className="App-input" type="password" name="password" />
                </div>  
                <button onClick={
                  ()=> {this.setState({titulo: "Login"})}
                }>Login</button>
              </form>
            </div>
          )
        }
}