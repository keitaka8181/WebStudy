'use client'

import { useEffect, useState } from 'react'

interface Task {
  id: number
  title: string
  description: string
  status: 'todo' | 'doing' | 'done'
  dueDate: string
}

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
  const [form, setForm] = useState<Task>(task)

  // 親から渡された task が変わったら form を更新（重要）
  useEffect(() => {
    setForm(task)
  }, [task])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value } as Task))
  }

  const handleSave = () => {
    // 簡単なバリデーション（タイトル必須）
    if (!form.title.trim()) {
      alert('タイトルを入力してください')
      return
    }
    onUpdate(form)
    setIsEditing(false)
  }

  return (
    <div className="p-3 border rounded mb-2 bg-white">
      {isEditing ? (
        <div className="space-y-2">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-1 w-full"
            placeholder="タイトル"
          />
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border p-1 w-full"
            placeholder="説明"
          />
          <select name="status" value={form.status} onChange={handleChange} className="border p-1 w-full">
            <option value="todo">ToDo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            className="border p-1 w-full"
          />
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">
              保存
            </button>
            <button onClick={() => setIsEditing(false)} className="px-3 py-1 border rounded">
              キャンセル
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="font-bold">{task.title}</h3>
          <p className="text-sm text-gray-700">{task.description}</p>
          <p className="text-sm text-gray-500">状態: {task.status}</p>
          <p className="text-sm text-gray-500">期限: {task.dueDate}</p>
          <div className="mt-2 space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-400 px-2 py-1 rounded">
              編集
            </button>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">
              削除
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
