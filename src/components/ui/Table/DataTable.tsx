import type { TableProps } from "@/types/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable({ data, headers }: Readonly<TableProps<any>>) {
  return (
    <tbody>
      {!!data?.length &&
        data.map((row) => (
          <tr key={String(row[headers[0].key])}>
            {headers.map((header) => (
              <td key={String(header.key)}>
                {header.type === "date"
                  ? new Date(String(row[header.key])).toLocaleDateString()
                  : String(row[header.key])}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
}
