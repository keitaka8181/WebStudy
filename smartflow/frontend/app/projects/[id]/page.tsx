import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskList from "@/components/TaskList";

interface Props {
  params: { projectId: string };
}

export default function ProjectPage({ params }: Props) {
  const { projectId } = params;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-4">
          プロジェクト詳細 - ID: {projectId}
        </h2>
        <TaskList />
      </div>

      <Footer />
    </main>
  );
}
