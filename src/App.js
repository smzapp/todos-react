import React from 'react';
import './App.css';
import Tolist from './Todo/tolist';
import AddItem from './Todo/addItem.js';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      todos:[]
    }
  }

  render() {
    return(
      <div>
        <AddItem addTodoFn={this.addTodo}></AddItem>
        <Tolist updateTodoFn={this.updateTodo} todos={this.state.todos}></Tolist>
      </div>
    );
  }

  componentDidMount = () => {
    console.log('Logged na');
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log('No todos');
    }
  }

  addTodo = async (todo) => {
    console.log(todo);
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo){
        return {
          text: todo.text,
          completed: !todo.completed
        }
      }
      else
      return _todo
    });
    await this.setState({ todos: newTodos});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
}

export default App;
