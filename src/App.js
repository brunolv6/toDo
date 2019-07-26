import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: "",
      todo: []
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  handleAdd = () => {
    let todos = this.state.todo;
    todos.push(this.state.inputValue);
    this.setState({todo: todos});
    this.setState({inputValue: ""});
  }

  render(){
    return(
      <div className="App App-header"> 
        <div>
          <h1>Lista To Do</h1>
          <input autoFocus type="text" placeholder="o que fará?"
            onChange={this.handleChange}
          />
          <button onClick={this.handleAdd}>add</button>
        </div>
        {
          this.state.todo.map(td => (
            <h3> {td} </h3>
          ))
        }  
      </div>
    );
  }

}

export default App;
