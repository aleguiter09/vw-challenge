import "./Home.scss";
import { Table } from "@/components/ui/Table/Table";
import { listTasks } from "@/services/api/tasks";
import { useTasks } from "@/services/store/tasks";
import { TasksTableHeader } from "@/utils/constants";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Home() {
  const { sort, page } = useTasks();

  const { data, isError, error } = useSuspenseQuery({
    queryKey: ["tasks", page, sort.by, sort.order],
    queryFn: () => listTasks(page, sort.by, sort.order),
  });

  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <h1 className="title">Volkswagen Digital:Hub</h1>
      <h3>Frontend Challenge</h3>
      <Table data={data} headers={TasksTableHeader} />
    </>
  );
}
