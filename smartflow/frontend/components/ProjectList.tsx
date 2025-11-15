import Link from "next/link";

type Project = {
  id: number;
  name: string;
  description: string;
};

const dummyProjects: Project[] = [
  { id: 1, name: "Webサイト制作", description: "コーポレートサイトを作るプロジェクト" },
  { id: 2, name: "スマホアプリ開発", description: "iOS/Android向けアプリ" },
  { id: 3, name: "AIチャットボット", description: "顧客対応用AIチャットの構築" },
];

export default function ProjectList() {
  return (
    <div className="grid gap-4 mt-6">
      {dummyProjects.map((p) => (
        <Link href={`/projects/${p.id}`} key={p.id}>
          <div className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition-shadow cursor-pointer">
            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{p.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
