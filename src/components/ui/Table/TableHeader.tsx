import { useTasks } from "@/services/store/tasks";
import type { TableHeader } from "@/types/table";
import type { Task } from "@/types/tasks";

export function TableHeader({
  headers,
}: Readonly<{ headers: TableHeader<Task>[] }>) {
  const { sort, setSort } = useTasks();

  const handleSort = (key: keyof Task) => {
    if (sort.by === key) {
      setSort({ by: key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ by: key, order: "asc" });
    }

    console.log(sort);
  };

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={String(header.key)}>
            <button onClick={() => handleSort(header.key)}>
              {String(header.key).toUpperCase()}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}
