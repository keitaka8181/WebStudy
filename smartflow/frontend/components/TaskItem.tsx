'use client'
import { useState } from 'react'
import { Task } from './TaskList'

export default function TaskItem({
  task,
  onUpdate,
  onDelete,
}: {
  task: Task
  onUpdate: (task: Task) => void
  onDelete: (id: number) => void
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [status, setStatus] = useState(task.status)

  const save = () => {
    onUpdate({ ...task, title, status })
    setIsEditing(false)
  }

  return (
    <li className="border rounded p-2 flex justify-between items-center">
      {isEditing ? (
        <div className="flex gap-2 flex-1">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-1 flex-1"
          />
          <select value={status} onChange={(e) => setStatus(e.target.value as Task['status'])}>
            <option value="todo">ToDo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button onClick={save} className="bg-green-500 text-white px-2 rounded">保存</button>
        </div>
      ) : (
        <>
          <span>{task.title}</span>
          <span className="text-sm text-gray-500">{task.status}</span>
          <div className="flex gap-1">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-400 px-2 rounded">編集</button>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 px-2 rounded text-white">削除</button>
          </div>
        </>
      )}
    </li>
  )
}
