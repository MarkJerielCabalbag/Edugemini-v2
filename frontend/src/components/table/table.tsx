import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LucideArrowUpDown,
} from "lucide-react";
import { Button } from "../ui/button";

import { Card, CardDescription, CardFooter } from "../ui/card";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  dataSheet?: TData[];
  tableHeader?: React.ReactNode;
  filterInputName?: string;
  serachFor?: string;
  excelFilename?: string;
  onRowClick?: (row: any) => void;
}

const DataTable = <TData, TValue>({
  tableHeader,
  data,
  columns,
  onRowClick,
}: DataTableProps<TData, TValue>) => {
  const memoData = useMemo(() => data || [], [data]);

  const column = useMemo(() => columns || [], [columns]);

  const [rowCount, setRowCount] = useState(memoData.length);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: memoData,
    columns: column,
    initialState: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    rowCount: memoData.length,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const [selectSize, setSelectSize] = useState(
    table.getState().pagination.pageSize
  );

  const handlePageSizeChange = (value: any) => {
    setSelectSize(Number(value));
    setPagination((prev) => ({
      ...prev,
      pageSize: Number(value),
    }));
    table.setPageSize(Number(value));
  };
  return (
    <Card className="shadow-none rounded-sm">
      <CardDescription>
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          {header.column.getCanSort() && (
                            <LucideArrowUpDown
                              className="h-4 w-4 cursor-pointer"
                              onClick={
                                header.column.getCanSort()
                                  ? header.column.getToggleSortingHandler()
                                  : undefined
                              }
                            />
                          )}
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.getCanSort() && (
                            <span className="ml-1">
                              {header.column.getIsSorted() === "desc"
                                ? " 🔼"
                                : header.column.getIsSorted() === "asc"
                                ? " 🔽"
                                : ""}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => onRowClick?.(row.original)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardDescription>
      <CardFooter>
        <div className={`flex flex-col gap-2 md:flex-row`}>
          <div className="flex flex-col gap-2 items-center md:flex-row">
            <Button
              className="w-full md:w-auto"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              className="w-full md:w-auto"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              className="w-full md:w-auto"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              className="w-full md:w-auto"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>

            <p>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </p>
          </div>
          <div>
            {/* <Select
                value={String(selectSize)}
                onValueChange={handlePageSizeChange}
              >
                {[
                  { value: "10", label: "10" },
                  { value: "20", label: "20" },
                  { value: "30", label: "30" },
                  { value: "40", label: "40" },
                  { value: rowCount, label: "All" },
                ].map((sizeOption) => (
                  <SelectContent>
                    <SelectItem
                      key={sizeOption.value}
                      value={sizeOption.value as string}
                    >
                      {sizeOption.label}
                    </SelectItem>
                    Show {sizeOption.label}
                  </SelectContent>
                ))}
              </Select> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DataTable;
