import { getTasksCount } from "@/services/api/tasks";
import { useTasks } from "@/services/store/tasks";
import { useSuspenseQuery } from "@tanstack/react-query";

export function TablePagination() {
  const { page, setPage } = useTasks();
  const { data: totalPages } =
    useSuspenseQuery({
      queryKey: ["tasksCount"],
      queryFn: () => getTasksCount(),
    }) ?? 1;

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={handlePrev} disabled={page === 1}>
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
