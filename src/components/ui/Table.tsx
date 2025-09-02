import { useQuery } from "@tanstack/react-query";
import { listTasks } from "../../services/api/tasks";

export function Table() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => listTasks(),
  });

  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred: " + error.message;

  return (
    <div>
      {data?.length &&
        data.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.priority}</p>
            <p>{task.status}</p>
            <p>{task.dueDate}</p>
          </div>
        ))}
    </div>
  );
}
