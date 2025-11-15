// frontend/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SmartFlow</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:underline">
              Register
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
