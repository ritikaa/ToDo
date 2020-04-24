import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from "./TodoList";
import './App.css';

class App extends Component {
  state = {
    listData: [],
  };

  handleMySubmit = (data) => {
    const { listData } = this.state;
    this.setState({
      listData: [...listData, data]
    })
  };

  onListItemClick = (index) => {
    const { listData } = this.state;
    const tempState = listData.slice();
    //console.log(tempState);
    //console.log(tempState[index].status);
    const catchStatus = tempState[index].status === 'completed' ? 'completed' : 'completed';
    listData[index].status = catchStatus;
    //console.log(this.state.isDisable);
    //console.log(listData[index].status);
    //console.log(catchStatus);
    this.setState({
      listData: tempState,
    })

    // this.setState({
    //   listData:
    // })

  };

  render() {
    return (
      <div className="wrapper">
        <div className="card">
          <h1>ToDo</h1>
          <TodoForm mySubmit={this.handleMySubmit}/>
          <TodoList
            listProps={this.state.listData}
            onListItemClick={this.onListItemClick}
            isDisable={this.state.isDisable}
          />
        </div>
      </div>
    );
  }
}

export default App;