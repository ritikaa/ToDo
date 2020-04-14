import React, { Component } from 'react';
import TodoForm from './TodoForm';
import './App.css';

// const initialState = {
//   task: '',
//   description: '',
//   status: [],
//   error: [],
//   isSubmit: false,
// };

class App extends Component {
  constructor(props) {
    super( props );
    this.state = {
      task: '',
      description: '',
      status: [],
      error: [],
      counter: 1,
      serialNo: [],
      taskList: [],
      descriptionList: [],
      statusList: [],
      isSubmit: false,
      isEnabled: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let { status } = this.state;
    if(name === 'checkbox') {
      status = status.includes(value) ? status.filter(item => item !== value) : [...status,value];
      this.setState({
        status,
        isSubmit: true,
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  };

  handleClick = () => {
    this.setState({
      error: [],
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const { task, description, status, error, counter,  serialNo, taskList, descriptionList, statusList, isSubmit } = this.state;
    if(task!=='' && description!=='' && status.length) {
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
        this.setState({
          task: '',
          description: '',
          status: [],
          error: [],
          counter: counter+1,
          serialNo: serialNo.concat(counter),
          taskList: taskList.concat(task),
          descriptionList: descriptionList.concat(description),
          statusList: statusList.concat(status),
          isSubmit: !isSubmit,
        }, () => {
          alert('Submitted');
        });
      }
    } else {
      error.push('Please fill all the fields');
        this.setState({
          error,
        })
    }
  };

  render() {
    const { task, description, status, error, serialNo, taskList, descriptionList, statusList } = this.state;
    let isEnabled = error.length > 0;
    return (
      <div className="wrapper">
        <div className="card">
          <h1>ToDo</h1>
          <div className="cardBody">
            {
              error.map((err,index) => {
                return <div className="error" key={index}>{err}</div>
            })
            }
            <TodoForm
              submit={this.handleSubmit}
              clicked={this.handleClick}
              changeHandler={this.handleChange}
              task={task}
              description={description}
              isChecked={status.includes('completed')}
              ifChecked={status.includes('incomplete')}
              ifEnabled={isEnabled}
            />
            <div className="taskList">
              <ul>
                <li>S.No</li>
                {
                  serialNo.map((count, index) => {
                    return <li key={index}>{count}</li>
                  })
                }
              </ul>
              <ul>
                <li>Task</li>
                {
                  taskList.map((item,index) => {
                   return <li key={index}>{item}</li>
                  })
                }
              </ul>
              <ul>
                <li>Description</li>
                {
                  descriptionList.map((descriptionItem,index) => {
                    return <li key={index}>{descriptionItem}</li>
                  })
                }
              </ul>
              <ul>
                <li>Mark Status</li>
                {
                  statusList.map((listItem,index) => {
                    return <li key={index}>{listItem}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;