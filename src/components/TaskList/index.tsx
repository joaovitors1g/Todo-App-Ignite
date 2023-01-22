import { Task } from '../Task'

import styles from './TaskList.module.css'

interface TasklistProps {
  tasks: {
    id: string
    title: string
    isCompleted: boolean
  }[]
  handleCompleteStateChange: (taskId: string) => void
  handleRemoveTask: (taskId: string) => void
}

export function Tasklist({
  tasks,
  handleCompleteStateChange,
  handleRemoveTask,
}: TasklistProps) {
  const completedTaskCount = tasks.filter((task) => task.isCompleted).length

  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.textContainer}>
          <span className={`${styles.text} ${styles.createdText}`}>
            Tarefas criadas
          </span>
          <span className={styles.pill}>{tasks.length}</span>
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.text} ${styles.completedText}`}>
            Concluídas
          </span>
          <span className={styles.pill}>
            {completedTaskCount} de {tasks.length}
          </span>
        </div>
      </header>

      <div className={styles.taskListContainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            onCompletedChange={() => handleCompleteStateChange(task.id)}
            onTaskRemove={() => handleRemoveTask(task.id)}
          />
        ))}
      </div>
    </div>
  )
}
