'use client'

import { useState } from 'react'
import TaskItem from '@/components/TaskItem'

interface Task {
  id: number
  title: string
  description: string
  status: 'todo' | 'doing' | 'done'
  dueDate: string
}

export default function TaskList() {
  // 初期タスク
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'UI設計', description: 'トップページをデザイン', status: 'todo', dueDate: '2025-11-15' },
    { id: 2, title: 'API接続', description: 'GET /tasks', status: 'doing', dueDate: '2025-11-20' },
  ])

  // 新規タスク用 state
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newDueDate, setNewDueDate] = useState('')

  // タスク追加
  const addTask = () => {
    if (!newTitle) return
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTitle,
      description: newDescription,
      status: 'todo',
      dueDate: newDueDate || new Date().toISOString().split('T')[0],
    }
    setTasks([...tasks, newTask])
    setNewTitle('')
    setNewDescription('')
    setNewDueDate('')
  }

  // タスク更新
  const updateTask = (updated: Task) =>
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)))

  // タスク削除
  const deleteTask = (id: number) =>
    setTasks(prev => prev.filter(t => t.id !== id))

  return (
    <div>
      {/* 新規タスク追加フォーム */}
      <div className="mb-4 space-y-2 p-2 border rounded bg-gray-50">
        <input
          type="text"
          className="border rounded px-2 py-1 w-full"
          placeholder="タスク名"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          className="border rounded px-2 py-1 w-full"
          placeholder="説明"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          type="date"
          className="border rounded px-2 py-1 w-full"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={addTask}
        >
          追加
        </button>
      </div>

      {/* タスク一覧 */}
      <h2 className="text-xl font-bold mb-3">タスク一覧</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  )
}
