'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && password) {
      // ダミー登録: localStorage に保存
      localStorage.setItem('user', JSON.stringify({ name, email }))
      router.push('/dashboard')
    } else {
      alert('すべての項目を入力してください')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">新規登録</h2>

        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />
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

        <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">
          登録する
        </button>

        <p className="text-center text-sm mt-3">
          すでにアカウントをお持ちですか？{' '}
          <a href="/login" className="text-blue-600 underline">ログインへ</a>
        </p>
      </form>
    </div>
  )
}
