'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 後で /auth/login に送信
    if (email && password) {
      console.log('ログイン成功（ダミー）')
      setMessage('ログイン成功！（ダミー）')
      setTimeout(() => router.push('/'), 1000)
    } else {
      setMessage('メールまたはパスワードを入力してください')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">ログイン</h1>
      <form onSubmit={handleLogin} className="space-y-3">
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
        <button className="bg-green-500 text-white px-3 py-2 rounded w-full">ログイン</button>
      </form>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </div>
  )
}
