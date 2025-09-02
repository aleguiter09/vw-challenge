import { create } from "zustand";

type Sort = { by: "name" | "createdAt"; order: "asc" | "desc" };

type State = {
  search: string;
  sort: Sort;
  selectedId?: string;
  isCreateOpen: boolean;
};

type Actions = {
  setSearch: (v: string) => void;
  setSort: (s: Sort) => void;
  setSelected: (id?: string) => void;
  toggleCreate: (v?: boolean) => void;
};

export const useItems = create<State & Actions>((set) => ({
  search: "",
  sort: { by: "name", order: "asc" },
  selectedId: undefined,
  isCreateOpen: false,
  setSearch: (v) => set({ search: v }),
  setSort: (s) => set({ sort: s }),
  setSelected: (id) => set({ selectedId: id }),
  toggleCreate: (v) => set((st) => ({ isCreateOpen: v ?? !st.isCreateOpen })),
}));
