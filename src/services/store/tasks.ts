import type { Task } from "@/types/tasks";
import { create } from "zustand";

type Sort = {
  by: keyof Task;
  order: "asc" | "desc";
};

type State = {
  search: string;
  sort: Sort;
  page: number;
  selectedId?: string;
  isCreateOpen: boolean;
};

type Actions = {
  setSearch: (v: string) => void;
  setSort: (s: Sort) => void;
  setPage: (p: number) => void;
  setSelected: (id?: string) => void;
  toggleCreate: (v?: boolean) => void;
};

export const useTasks = create<State & Actions>((set) => ({
  search: "",
  sort: { by: "id", order: "asc" },
  selectedId: undefined,
  isCreateOpen: false,
  page: 1,
  setPage: (p) => set({ page: p }),
  setSearch: (v) => set({ search: v }),
  setSort: (s) => set({ sort: s }),
  setSelected: (id) => set({ selectedId: id }),
  toggleCreate: (v) => set((st) => ({ isCreateOpen: v ?? !st.isCreateOpen })),
}));
