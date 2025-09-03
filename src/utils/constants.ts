import type { TableHeader } from "@/types/table";
import type { Task } from "@/types/tasks";

export const TasksTableHeader: TableHeader<Task>[] = [
  { key: "id", type: "number" },
  { key: "title", type: "string" },
  { key: "status", type: "string" },
  { key: "priority", type: "string" },
  { key: "dueDate", type: "date" },
];
