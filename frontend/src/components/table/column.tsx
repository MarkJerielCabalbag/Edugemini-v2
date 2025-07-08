import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("relatedToStudent.lastname", {
    id: "lastname",
    header: () => "Lastname",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("relatedToStudent.middlename", {
    id: "middlename",
    header: () => "Middlename",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("relatedToStudent.firstname", {
    id: "firstname",
    header: () => "Firstname",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("relatedToStudent.sex", {
    id: "sex",
    header: () => "Sex",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("relatedToScore.score", {
    id: "score",
    header: () => "Score",
    cell: (info) => info.getValue(),
  }),
];

export const excelColumns = [
  columnHelper.accessor("relatedToStudent.lastname", {
    id: "lastname",
    header: () => "Lastname",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("relatedToStudent.middlename", {
    id: "middlename",
    header: () => "Middlename",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("relatedToStudent.firstname", {
    id: "firstname",
    header: () => "Firstname",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('', {
    id: 'Title'
  })
]
