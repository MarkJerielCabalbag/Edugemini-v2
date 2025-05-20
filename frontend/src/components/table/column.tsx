import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("lastname", {
    id: "lastname",
    header: () => "Lastname",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("middlename", {
    id: "middlename",
    header: () => "Middlename",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("firstname", {
    id: "firstname",
    header: () => "Firstname",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("sex", {
    id: "sex",
    header: () => "Sex",
    cell: (info) => info.getValue(),
  }),
];
