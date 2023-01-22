import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './CreateTaskForm.module.css'

interface InputProps {
  onTaskAdd: (title: string) => void
}

export function CreateTaskForm({ onTaskAdd }: InputProps) {
  const [title, setTitle] = useState('')

  function handleTaskAdd(event: FormEvent) {
    event.preventDefault()
    if (!title.trim()) {
      alert('Informe um título para a tarefa.')
      return
    }
    onTaskAdd(title)
    setTitle('')
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleTaskAdd}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button className={styles.addButton}>
        Criar
        <PlusCircle size={16} color="#fff" />
      </button>
    </form>
  )
}
