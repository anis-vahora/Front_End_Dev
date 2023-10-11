import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }
  addTodo = (task) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, task],
      newTodo: "",
    }));
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim() === "") return;
    this.addTodo(this.state.newTodo);
  };
  removeTodo = (index) => {
    const updateTodos = [...this.state.todos];
    updateTodos.splice(index, 1);
    this.setState({ todos: updateTodos });
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <input
          type="text"
          placeholder="Add a new task"
          onChange={this.handleInputChange}
          value={this.state.newTodo}
          style={{
            width: "300px",
            height: "23px",
            background: "#fefafad0",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={this.handleAddTodo}
          style={{
            background: "lightblue",
            width: "50px",
            height: "23px",
            borderRadius: "5px",
            border: "1px solid green",
            marginLeft: "10px",
            color: "black",
          }}
        >
          Add
        </button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index} style={{ color: "black" }}>
              {todo}
              <button
                onClick={() => this.removeTodo(index)}
                style={{
                  background: "gray",
                  border: "1px solid #b7c0b76a",
                  marginLeft: "10px",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
              >
                Remove
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
