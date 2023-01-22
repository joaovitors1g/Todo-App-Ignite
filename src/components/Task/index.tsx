import { useState } from 'react'
import { Check, Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'

import styles from './Task.module.css'

interface TaskProps {
  isCompleted: boolean
  title: string
  onCompletedChange: () => void
  onTaskRemove: () => void
}

export function Task({
  title,
  isCompleted = false,
  onCompletedChange,
  onTaskRemove,
}: TaskProps) {
  function handleToggleCompleted() {
    onCompletedChange()
  }

  return (
    <div
      className={`${styles.taskContainer} ${
        isCompleted ? styles.completedTask : ''
      }`}
    >
      <div className={`${styles.taskInfo}`}>
        <Checkbox.Root
          defaultChecked={isCompleted}
          className={styles.checkbox}
          onCheckedChange={handleToggleCompleted}
        >
          <Checkbox.Indicator className={styles.checkboxIndicator}>
            <Check size={17} className={styles.checkIcon} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p>{title}</p>
      </div>

      <button className={styles.deleteButton} onClick={onTaskRemove}>
        <Trash size={24} className={styles.deleteIcon} />
      </button>
    </div>
  )
}
