'use client'
import { useState } from 'react'

interface Task {
  id: number
  title: string
  description: string
  status: 'todo' | 'doing' | 'done'
  dueDate: string
}

export default function TaskItem({ task, onUpdate, onDelete }: {
  task: Task
  onUpdate: (task: Task) => void
  onDelete: (id: number) => void
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState(task)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    onUpdate(form)
    setIsEditing(false)
  }

  return (
    <div className="p-3 border rounded mb-2">
      {isEditing ? (
        <div className="space-y-2">
          <input name="title" value={form.title} onChange={handleChange} className="border p-1 w-full" />
          <input name="description" value={form.description} onChange={handleChange} className="border p-1 w-full" />
          <select name="status" value={form.status} onChange={handleChange} className="border p-1 w-full">
            <option value="todo">ToDo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} className="border p-1 w-full" />
          <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">保存</button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <p>状態: {task.status}</p>
          <p>期限: {task.dueDate}</p>
          <div className="mt-2 space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-400 px-2 py-1 rounded">編集</button>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">削除</button>
          </div>
        </div>
      )}
    </div>
  )
}
