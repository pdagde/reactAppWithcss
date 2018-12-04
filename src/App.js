import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodolist'

class App extends Component {
  state = {
       todos : [
         {id:1,content:"buy some TODO"},
         {id:2,content:"buy some TODO A"},
         {id:3,content:"buy some TODO B"},
         {id:4,content:"buy some TODO C"}

       ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
        return id !== todo.id;
    })
    this.setState({
        todos
    })
  }
  addTodo = (todo) =>{
      todo.id = Math.random();
     const todos = [...this.state.todos,todo]
     this.setState({
      todos
     })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> My Todo Lists</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;
