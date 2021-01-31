import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  body {width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2d2d37;}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  span {
    color: white;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    text-align: left;
  }

  form {
    width: 50%;
    display: flex;
  }

  button {
    background-color: #e64944;
    border: 1px solid #e64944;
    color: white;
    font-size: 16px;
    padding: 6px 14px;
    margin: 5px;
  }

  .completed {
    text-decoration: line-through;
  }


`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Bake Cookies",
          id: 12345678,
          completed: false,
        },
      ],
    };
  }

  addNewTodo = (newTodo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: newTodo,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  toggleTodo = (todoID) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  clearTodos = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h2>Todo List: MVP</h2>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
        <TodoForm addNewTodo={this.addNewTodo} clearTodos={this.clearTodos} />
      </div>
    );
  }
}

export default App;
