import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />)

  function addTask(name) {

    if (name.length === 0) {
      return
    }

    const newTask = {
      id: 'id', name: name, completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const headingText = `${taskList.length} tasks remaining`;




  return (
    <div className="todoapp stack-large">
      <h1>Don't forget to....{headingText}</h1>
      <Form addTask={addTask} />
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />


      {/* <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> Things to Do</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Display the </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Display the </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div> */}
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}

      </ul>
    </div>
  );
}
export default App;
