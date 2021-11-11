import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {

    const updatedTasks = tasks.map(task => {
      //if the task has matching id, 
      if (id === task.id) {
        //use object spread to make a new object 
        // whoos completed prop has been inverted and
        return {
          ...task, completed: !task.completed
        }
      }
      return task;
    })
    setTasks(updatedTasks)

  }

  const taskList = tasks.filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask} />))
  // list of filter types
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter} />
  ));

  const tasksNoun = taskList.length > 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining 🧐 `;

  function addTask(name) {

    if (name.length === 0) {
      return
    }

    const newTask = {
      id: 'todo-' + nanoid(), name: name, completed: false
    };
    setTasks([...tasks, newTask]);
  }

  //deletes a todo by filtering the todosId
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks)
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    })
    setTasks(editedTaskList)
  }

  return (

    <div className="todoapp stack-large">

      {taskList.length > 0 ? (<h1>{headingText}</h1>) : (<h1>0 Tasks Todo 🤪 </h1>)}
      {filterList}
      <Form addTask={addTask} />
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
