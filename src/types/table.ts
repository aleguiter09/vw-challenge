export type TableHeader<T> = {
  key: keyof T;
  type: "string" | "number" | "date";
};

export type TableProps<T> = {
  data: T[];
  headers: TableHeader<T>[];
};
