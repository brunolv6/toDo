import React, { Component } from 'react';
import { AddInput } from './components/add-input/add-input.component'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: "",
      todo: [],
      red: false
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

  handleColor = () => {
    this.setState(prevState => ({red: !prevState.red }));
  }

  render(){
    const cor = {
      backgroundColor: 'red'
    }

    return(
      <div className="App App-header"> 
        <div>
          <h1>Lista To Do</h1>
          <AddInput 
            todo={this.state.todo} 
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
          /> 
          {
            (this.state.red) 
            ?
            <button style={cor} onClick={this.handleColor}>Change Color</button>
            :
            <button onClick={this.handleColor}>Change Color</button>
          }
        </div>
      </div>
    );
  }

}

export default App;
