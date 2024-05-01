import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { DndContext, closestCorners } from '@dnd-kit/core';
import { Column } from './components/Column/Column';
import { arrayMove } from '@dnd-kit/sortable';
import { Input } from './components/Input/Input';

function App() {
  const [tasks, setTasks] = useState([
    {id : 1, title : "Call Participants for follow up"},
    {id : 2, title : "Yog Nidra"},
    {id : 3, title : "Start by 4.50pm for Kalpana aunty's home"},

  ])

  const getTasksPos = id => tasks.findIndex(task => task.id == id)
  const onDragEnd = (event) => {
    const {active, over }= event
    if(active.id == over.id) return;
    setTasks(tasks => {
      const originalPos = getTasksPos(active.id)
      const newPos = getTasksPos(over.id)
      
      return arrayMove(tasks, originalPos, newPos)
    })

  }

  const addTask = title => {
    setTasks(tasks => [...tasks, {
      id : tasks.length +1,
      title
    }])
  }
  return (
    <div className='App'>
      <h1>

      Tasks
      </h1>
      <Input onSubmit = {addTask}/>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <Column tasks={tasks}/>
      </DndContext>
    </div>
  )
}

export default App
