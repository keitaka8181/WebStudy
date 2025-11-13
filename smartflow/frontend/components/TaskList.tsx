'use client'

import { useEffect, useState } from 'react'
import TaskItem from '@/components/TaskItem'

interface Task {
  id: number
  title: string
  description: string
  status: 'todo' | 'doing' | 'done'
  dueDate: string
}

interface TaskListProps {
  initialTasks?: Task[]
}

export default function TaskList({ initialTasks = [] }: TaskListProps) {
  // 初期タスクは props から（props 変化を反映する）
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  useEffect(() => {
    setTasks(initialTasks)
  }, [initialTasks])

  // 新規タスク用 state
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newStatus, setNewStatus] = useState<'todo' | 'doing' | 'done'>('todo')
  const [newDueDate, setNewDueDate] = useState('')

  // 次のIDを安全に決める（既存の最大ID + 1）
  const nextId = () => {
    if (tasks.length === 0) return 1
    return Math.max(...tasks.map(t => t.id)) + 1
  }

  // タスク追加
  const addTask = () => {
    if (!newTitle.trim()) {
      alert('タスク名を入力してください')
      return
    }
    const newTask: Task = {
      id: nextId(),
      title: newTitle,
      description: newDescription,
      status: newStatus,
      dueDate: newDueDate || new Date().toISOString().split('T')[0],
    }
    setTasks(prev => [...prev, newTask])
    setNewTitle('')
    setNewDescription('')
    setNewStatus('todo')
    setNewDueDate('')
  }

  // タスク更新
  const updateTask = (updated: Task) =>
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)))

  // タスク削除
  const deleteTask = (id: number) => setTasks(prev => prev.filter(t => t.id !== id))

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
        {/* ステータス選択 */}
        <select
          className="border rounded px-2 py-1 w-full"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value as 'todo' | 'doing' | 'done')}
        >
          <option value="todo">ToDo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
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
      {tasks.length === 0 ? (
        <p className="text-gray-500">このプロジェクトのタスクはありません。</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
        ))
      )}
    </div>
  )
}
