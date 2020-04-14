import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.submit} noValidate={true}>
      <div className="fieldSeparator">
        <label htmlFor="task">Task : </label>
        <input
          type="text"
          id="task"
          name="task"
          onClick={props.clicked}
          onChange={props.changeHandler}
          value={props.task}
        />
      </div>
      <div className="fieldSeparator">
        <label htmlFor="description">Description : </label>
        <textarea
          rows="5"
          id="description"
          name="description"
          onClick={props.clicked}
          onChange={props.changeHandler}
          value={props.description}
        />
      </div>

      <div className="fieldSeparator">
        <p>Status : </p>
        <input
          type="checkbox"
          name="checkbox"
          id="completed"
          checked={props.isChecked}
          onChange={props.changeHandler}
          onClick={props.clicked}
          value="completed"
        />
        <label htmlFor="completed">Completed</label>

        <input
          type="checkbox"
          name="checkbox"
          id="incomplete"
          onClick={props.clicked}
          checked={props.ifChecked}
          onChange={props.changeHandler}
          value="incomplete"
        />
        <label htmlFor="incomplete">Not Completed</label>
      </div>
      <input
        type="submit"
        value="Submit"
        disabled={props.ifEnabled}
      />
    </form>
  );
}

export default TodoForm;