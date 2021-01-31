import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo toggleTodo={this.props.toggleTodo} key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
