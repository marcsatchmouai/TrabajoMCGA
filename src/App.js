// import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import styles from './login.module.css'
import Card from './Card'


//o usar el constructor
// constructor(props){
//   super(props)
// }

class Login extends Component {
  state = {
    titulo: "Login",
    email: undefined,
    password: undefined,
    loginSuccess: false,
    message: undefined
  }

  onChangeEmail = 
  console.log('Se esta dibujando el componente')
  render() {
    return(
      <div className="App-header">
        <form>
          <div>
            <input className="App-input" type="email" name="email" value={this.state.value} onChange={this.handleChange} />
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
// class App extends Component {
//   state = {
//     titulo: "Mi trabajo de MCGA"
//   }

//   componentWillMount = () => {
//     console.log('Se esta por montar/dibujar el componente')
//   }  

//   componentDidMount = () => {
//     console.log('Ya se dibujo el componente')
//   }

//   componentWillReceiveProps(nextProps, nextState) {
//     console.log('Se actualizo el componente')
//     console.log(nextState)
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("state actual:", this.state)
//     console.log("state actualizado:", nextState)
//     return false
//   }

//   render() {
//     console.log('Se esta dibujando el componente')
//     return(
//       <div>
//         <button onClick={
//           ()=> {this.setState({titulo: "nuevo titulo"})}
//         }>Cambiar Titulo</button>
        
//         <Card text={this.state.titulo}/>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Login;
