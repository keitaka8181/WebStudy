import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold">プロジェクト一覧</h2>
        <ProjectList />
      </div>

      <Footer />
    </main>
  );
}
