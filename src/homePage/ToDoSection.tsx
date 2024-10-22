import React from "react";
import Image from "next/image";

interface Task {
  title: string;
  description: string;
  priority: string;
  status: string;
  statusColor: string;
  imageUrl: string;
  createdOn: string;
}

interface ToDoSectionProps {
  tasks: Task[];
}

const ToDoSection: React.FC<ToDoSectionProps> = ({ tasks }) => {
  return (
    <div className="ite p-5 rounded-lg mr-3 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-red-500">To-Do</h2>
        <button className="text-sm text-red-500 font-medium">+ Add task</button>
      </div>

      <div className="mb-4 text-sm text-gray-500">
        <span>20 June</span> <span className="mx-1">•</span> <span>Today</span>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white-main p-4 rounded-lg shadow-xl border flex justify-between items-center"
          >
            <div className="flex items-start">
              <div className="mr-4">
                <span
                  className={`w-4 h-4 block rounded-full border-2 ${task.statusColor}`}
                ></span>
              </div>

              <div className="relative">
                <h3 className="font-bold text-gray-700">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                <p className="text-border-gray text-[10px] absolute left-[640px] bottom-24">
                  ooo
                </p>
                <p className="text-sm mt-2">
                  Priority:{" "}
                  <span className="font-semibold text-blue-500">
                    {task.priority}
                  </span>{" "}
                  | Status:{" "}
                  <span className={`font-semibold ${task.statusColor}`}>
                    {task.status}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Created on: {task.createdOn}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Image
                src={task.imageUrl}
                alt={`${task.title} image`}
                width={64}
                height={64}
                className="rounded-lg object-cover w-16 h-16"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoSection;
