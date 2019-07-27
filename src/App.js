import React, { Component } from 'react';
import { AddInput } from './components/add-input/add-input.component'

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
          <AddInput todo={this.state.todo} handleChange={this.handleChange}
            handleAdd={this.handleAdd}
          /> 
        </div>
      </div>
    );
  }

}

export default App;
