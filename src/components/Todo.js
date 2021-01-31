import React, { Component } from "react";

export default class Todo extends Component {
  onClick = () => {
    this.props.toggleTodo(this.props.todo.id);
  };

  render() {
    return (
      <div
        onClick={this.onClick}
        className={`${this.props.todo.completed ? "completed" : ""}`}
      >
        <p>{this.props.todo.task}</p>
      </div>
    );
  }
}
