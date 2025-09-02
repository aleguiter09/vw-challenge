import axios from "axios";
import { ItemSchema, type Item } from "../../types/items";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:4000",
});

export async function listItems(): Promise<Item[]> {
  const { data } = await api.get("/items");
  return ItemSchema.array().parse(data);
}

export async function getItem(id: string): Promise<Item> {
  const { data } = await api.get(`/items/${id}`);
  return ItemSchema.parse(data);
}

export async function createItem(
  payload: Omit<Item, "id" | "createdAt">
): Promise<Item> {
  const { data } = await api.post("/items", {
    ...payload,
    createdAt: new Date().toISOString(),
  });
  return ItemSchema.parse(data);
}

export async function updateItem(
  id: string,
  payload: Partial<Item>
): Promise<Item> {
  const { data } = await api.patch(`/items/${id}`, payload);
  return ItemSchema.parse(data);
}

export async function deleteItem(id: string): Promise<void> {
  await api.delete(`/items/${id}`);
}
