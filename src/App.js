import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import AddTodo from './components/AddTodo'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)

  }

  addTodo(text){
    console.log(text)

    const todo = {
      id: Math.random(),
      text
    }

    this.state.todos.push(todo)

    this.setState({todos: this.state.todos})

  }

  deleteTodo(id){

    console.log(id)

    const todos = this.state.todos.filter(todo => todo.id !== id)

    this.setState({todos})
      
  }


  render() {
    return (
      <div className="App">
        
        <AddTodo addTodo={this.addTodo}/>
        <List todos={this.state.todos} deleteTodo={this.deleteTodo}/>

      </div>
    );
  }
}

export default App;
