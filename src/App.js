// import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'


//o usar el constructor
// constructor(props){
//   super(props)
// }

class App extends Component {
  state = {
    titulo: "Mi trabajo de MCGA"
  }

  componentWillMount = () => {
    console.log('Se esta por montar/dibujar el componente')
  }  

  componentDidMount = () => {
    console.log('Ya se dibujo el componente')
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('Se actualizo el componente')
    console.log(nextState)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("state actual:", this.state)
    console.log("state actualizado:", nextState)
    return false
  }

  render() {
    console.log('Se esta dibujando el componente')
    return(
      <div>
        <button onClick={()=> {
          this.setState({titulo: "nuevo titulo"})
        }}>Cambiar Titulo</button>
        
        <Card text={this.state.titulo}/>
      </div>
    )
  }
}

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

export default App;
