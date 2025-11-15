'use client'
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 後で /auth/register に送る
    console.log('登録:', { email, password })
    setMessage('登録成功！（ダミー）')
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">ユーザー登録</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button className="bg-blue-500 text-white px-3 py-2 rounded w-full">登録</button>
      </form>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </div>
  )
}
