import Header from "@/components/Header";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold">ここにメインコンテンツ</h2>
      </div>
    </main>
  );
}
