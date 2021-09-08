import { useState } from 'react'

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [showForm, setForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:         1,
        text:       'Developing the Navbar',
        day:        '22-02-2021',
        reminder:   true
    },
    {
        id:         2,
        text:       'Developing the Header',
        day:        '23-02-2021',
        reminder:   true
    },
    {
        id:         3,
        text:       'Developing the Container',
        day:        '24-02-2021',
        reminder:   false
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Reminder Toggle Function
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setForm(!showForm)} formState={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Tasks to Show'
        )}
    </div>
  );
}

export default App;
