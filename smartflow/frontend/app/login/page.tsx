'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      // ダミー認証: どんな入力でも通す
      localStorage.setItem('user', JSON.stringify({ email }))
      router.push('/dashboard')
    } else {
      alert('メールアドレスとパスワードを入力してください')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>

        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />

        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
          ログイン
        </button>

        <p className="text-center text-sm mt-3">
          アカウントを持っていませんか？{' '}
          <a href="/register" className="text-blue-600 underline">新規登録へ</a>
        </p>
      </form>
    </div>
  )
}
