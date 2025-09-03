import type { TableProps } from "@/types/table";
import { TableHeader } from "./TableHeader";
import { DataTable } from "./DataTable";
import type { Task } from "@/types/tasks";
import { TablePagination } from "./TablePagination";

export function Table({ data, headers }: Readonly<TableProps<Task>>) {
  return (
    <>
      <table>
        <TableHeader headers={headers} />
        <DataTable data={data} headers={headers} />
      </table>
      <TablePagination />
    </>
  );
}
