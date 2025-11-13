import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskList from "@/components/TaskList";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "doing" | "done";
  dueDate: string;
}

interface Props {
  params: { id: string }; // Next.js が渡す params のキーが folder name に依存
}

// ダミータスク（プロジェクトごと）
const dummyTasks: Record<string, Task[]> = {
  "1": [
    { id: 1, title: "要件定義書を作成", description: "機能一覧を整理", status: "todo", dueDate: "2025-11-15" },
    { id: 2, title: "画面ワイヤーフレーム作成", description: "トップページ", status: "doing", dueDate: "2025-11-18" },
  ],
  "2": [
    { id: 1, title: "デザインモック作成", description: "アプリUI", status: "todo", dueDate: "2025-11-16" },
    { id: 2, title: "API設計", description: "RESTエンドポイント", status: "doing", dueDate: "2025-11-20" },
  ],
  "3": [
    { id: 1, title: "AIモデル選定", description: "チャットボット用", status: "todo", dueDate: "2025-11-17" },
    { id: 2, title: "テストデータ作成", description: "会話シナリオ", status: "doing", dueDate: "2025-11-22" },
  ],
};

export default function ProjectPage({ params }: Props) {
  const projectId = params.id // folder name [id] → params.id
  const tasksForProject = dummyTasks[projectId] || []

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">プロジェクト詳細 - ID: {projectId}</h2>
        <TaskList initialTasks={tasksForProject} />
      </div>

      <Footer />
    </main>
  );
}
