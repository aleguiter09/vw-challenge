import axios from "axios";
import { TaskSchema, type Task } from "../../types/tasks";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:4000",
});

export async function listTasks(
  page: number = 1,
  sort: keyof Task = "id",
  order: "asc" | "desc" = "asc"
): Promise<Task[]> {
  const { data } = await api.get(
    `/tasks?_page=${page}&_sort=${sort}&_order=${order}`
  );

  return TaskSchema.array().parse(data.data);
}

export async function getTask(id: string): Promise<Task> {
  const { data } = await api.get(`/tasks/${id}`);
  return TaskSchema.parse(data);
}

export async function createTask(
  payload: Omit<Task, "id" | "createdAt">
): Promise<Task> {
  const { data } = await api.post("/tasks", payload);
  return TaskSchema.parse(data);
}

export async function updateTask(
  id: string,
  payload: Partial<Task>
): Promise<Task> {
  const { data } = await api.patch(`/tasks/${id}`, payload);
  return TaskSchema.parse(data);
}

export async function deleteTask(id: string): Promise<void> {
  await api.delete(`/tasks/${id}`);
}
