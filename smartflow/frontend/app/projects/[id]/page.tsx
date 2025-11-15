import TaskList from "@/components/TaskList";

interface Props {
  params: { projectId: string };
}

export default function ProjectPage({ params }: Props) {
  const { projectId } = params;

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        プロジェクト詳細 - ID: {projectId}
      </h2>
      <TaskList />
    </>
  );
}
