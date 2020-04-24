import React, { Component } from "react";

class FormList extends Component {
  render() {
    const { task } = this.props.data;
    return (
      <li>
        <span>{task.task}</span>
        <span>{task.description}</span>
        <span>{task.status}</span>
      </li>
    );
  }
}

export default FormList;