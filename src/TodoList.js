import React, { Component } from 'react';
// import FormList from "./FormList";
import './TodoList.css';

class TodoList extends Component {
  onListItemClick = (i) => {
    //alert(i);
    this.props.onListItemClick(i);

  };

    render() {
      // const listData = this.props.listProps.map((data,index) => {
      //   return <FormList key={index} data={data}/>
      // });

      const { listProps } = this.props;

      return(
        <div className="taskList">
          <ul>
            <li>
              <span className="spacer">Task:</span>
              <span>Description</span>
              <span>Status</span>
            </li>
            {
              listProps.map((item, index) => <>
                <li
                  key={index}
                  onClick={() => this.onListItemClick(index)}
                >
                  <span>{item.task}</span>
                  <span>{item.description}</span>
                  <span>{item.status}</span>
                </li>
              </>)
            }
          </ul>
        </div>
      );
    }
}

export default TodoList;