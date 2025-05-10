"use client";
import { Button } from "@/components/ui/button";
import React from "react";
const page = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "Assignment 1",
      description: "Complete exercises 1-5",
      dueDate: "2024-01-20",
    },
    {
      id: 2,
      title: "Project Work",
      description: "Submit group project proposal",
      dueDate: "2024-01-25",
    },
  ]);

  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Classwork</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all assignments and tasks
          </p>
        </div>
        <Button>Create Classwork</Button>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex flex-1 items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {task.description}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                Due: {task.dueDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
