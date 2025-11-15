'use client'
import { useState } from 'react'
import TaskItem from '@/components/TaskItem'

export type Task = {
  id: number
  title: string
  status: 'todo' | 'doing' | 'done'
}

const initialTasks: Task[] = [
  { id: 1, title: '要件定義書を作成', status: 'todo' },
  { id: 2, title: '画面ワイヤーフレーム作成', status: 'doing' },
  { id: 3, title: '開発環境構築', status: 'done' },
]

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTitle, setNewTitle] = useState('')

  const addTask = () => {
    if (!newTitle) return
    const newTask: Task = { id: tasks.length + 1, title: newTitle, status: 'todo' }
    setTasks([...tasks, newTask])
    setNewTitle('')
  }

  const updateTask = (updated: Task) => setTasks(tasks.map(t => t.id === updated.id ? updated : t))
  const deleteTask = (id: number) => setTasks(tasks.filter(t => t.id !== id))

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          className="border rounded px-2 py-1 flex-1"
          placeholder="新しいタスク名"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 rounded" onClick={addTask}>追加</button>
      </div>

      <ul className="space-y-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  )
}
