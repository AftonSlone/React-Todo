import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTodo(this.state.input);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="item"
            onChange={this.onChange}
            value={this.state.input}
          />
          <button onClick={this.onSubmit}>Add Todo</button>
          <button onClick={this.props.clearTodos}>Clear Completed</button>
        </form>
      </div>
    );
  }
}
