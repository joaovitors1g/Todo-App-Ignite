import './styles/global.css'
import { useState } from 'react'
import * as uuid from 'uuid'

import { Header } from './components/Header'
import { CreateTaskForm } from './components/CreateTaskForm'
import { Tasklist } from './components/TaskList'

interface Task {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCompleteStateChange(taskId: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id == taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          }
        }

        return task
      }),
    )
  }

  function handleAddTask(title: string) {
    setTasks((prevState) => [
      ...prevState,
      {
        id: uuid.v4(),
        title,
        isCompleted: false,
      },
    ])
  }

  function handleRemoveTask(taskId: string) {
    setTasks((prevState) => prevState.filter((task) => task.id != taskId))
  }

  return (
    <>
      <Header />
      <CreateTaskForm onTaskAdd={handleAddTask} />
      <Tasklist
        tasks={tasks}
        handleCompleteStateChange={handleCompleteStateChange}
        handleRemoveTask={handleRemoveTask}
      />
    </>
  )
}
