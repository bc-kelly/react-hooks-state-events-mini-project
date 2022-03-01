import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState("All");
  //this tasks^^ is what is being passed into the text prop down in the taskList
  // let displayedTasks = tasks;

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteButton (deletedText) {
    const newList = (tasks.filter((task) => task.text !== deletedText));
    setTasks(newList);
    console.log(newList);
    console.log(deletedText);
  }
  const visibleTasks = tasks.filter(
    (task) =>categories === "All" || task.category === categories
  );


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={categories}
        onSelectedCategory={setCategories}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter((cat) => cat !== "All")} 
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList text={visibleTasks} onDelete={handleDeleteButton}/>
    </div>
  );
}

export default App;
