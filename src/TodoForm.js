import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super( props );
    this.state = {
      task: '',
      description: '',
      status: '',
      error: [],
      isEnabled: false,
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  handleClick = () => {
    this.setState({
      error: [],
    })
  };

  changeStates = () => {
    this.setState({
      task: '',
      description: '',
      status: '',
      error: [],
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const { task, description, status, data, error } = this.state;
    if(task!=='' && description!=='' && status!=='') {
      let taskValidation  = /^[a-zA-Z][a-zA-Z\s]*$/;
      if(task && !task.match(taskValidation)) {
        error.push('Task should only be alphabets');
        this.setState({
          error
        })
      }
      if(error.length) {
        this.setState({
          error: [...error],
        })
      } else {
        this.props.mySubmit({
            task,
            description,
            status
          });
            alert('Submitted');
            this.changeStates();
      }
    } else {
      error.push('Please fill all the fields');
      this.setState({
        error,
      })
    }
  };

  render() {
    const { task, description, status, error, data } = this.state;
    let isEnabled = error.length > 0;

    return (
      <>
      {
        error.map((err,index) => {
          return <div className="error" key={index}>
            {err}
          </div>
        })
      }
      <form onSubmit={this.handleSubmit} noValidate={ true }>
        <div className="fieldSeparator">
          <label htmlFor="task">Task : </label>
          <input
            type="text"
            id="task"
            name="task"
            onClick={ this.handleClick }
            onChange={ this.handleChange }
            value={ task }
          />
        </div>
        <div className="fieldSeparator">
          <label htmlFor="description">Description : </label>
          <textarea
            rows="5"
            id="description"
            name="description"
            onClick={ this.handleClick }
            onChange={ this.handleChange }
            value={ description }
          />
        </div>

        <div className="fieldSeparator">
          <p>Status : </p>
          <input
            type="radio"
            name="status"
            id="completed"
            checked={ status === 'completed' }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value="completed"
          />
          <label htmlFor="completed">Completed</label>

          <input
            type="radio"
            name="status"
            id="incomplete"
            onClick={ this.handleClick }
            checked={ status === 'incomplete' }
            onChange={ this.handleChange }
            value="incomplete"
          />
          <label htmlFor="incomplete">Not Completed</label>
        </div>
        <input
          type="submit"
          value="Submit"
          disabled={ isEnabled }
        />
      </form>
        </>
    );
  }
}

export default TodoForm;