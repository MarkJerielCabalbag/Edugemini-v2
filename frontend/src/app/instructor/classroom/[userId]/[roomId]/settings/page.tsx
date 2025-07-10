"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetStudentsScore } from "@/hooks/instructor.hooks";
import DataTable from "@/components/table/table";
import { createColumnHelper } from "@tanstack/react-table";
const page = () => {
  const { roomId } = useParams();
  const { data } = useGetStudentsScore(Number(roomId));
  console.log(data);

  const columnHelper = createColumnHelper();

  const getClassworkTitles = (
    data: Array<{ scores: Array<{ title: string; score: number }> }>
  ) => {
    const titles = new Set<string>();
    if (data) {
      data.forEach((student) => {
        student.scores.forEach((cw: { title: string }) => titles.add(cw.title));
      });
    }
    return Array.from(titles);
  };

  const classworkTitles = data ? getClassworkTitles(data) : [];

  const excelColumns = [
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
    ...classworkTitles?.map((title: string) =>
      columnHelper.accessor(
        (row: any) => {
          const scoreObj = row.scores.find(
            (score: any) => score.title === title
          );
          return scoreObj ? scoreObj.score : "";
        },
        {
          id: title,
          header: () => title,
          cell: (info) => info.getValue(),
        }
      )
    ),
  ];
  return (
    <div className="p-4 bg-background max-w-7xl mx-auto w-full">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold break-words">Settings</h2>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base break-words">
          Manage students scores and export it trough excel.
        </p>
      </div>
      <div className="w-full overflow-x-auto">
        <DataTable data={data} columns={excelColumns} />
      </div>
    </div>
  );
};

export default page;
