import React from "react";
import Image from "next/image";

interface CompletedTask {
  title: string;
  description: string;
  status: string;
  image: string;
  alt: string;
  statusColor: string;
}

interface CompletedTasksSectionProps {
  completedTasks: CompletedTask[];
}

const CompletedTasksSection: React.FC<CompletedTasksSectionProps> = ({
  completedTasks,
}) => {
  return (
    <div className="space-y-4 bg-white-main p-5 rounded-lg shadow-xl mt-5">
      <h2 className="text-lg font-semibold mb-4 text-red-500">Completed</h2>
      <div className="space-y-2">
        {completedTasks.map((task, index) => (
          <div
            key={index}
            className="bg-white-main p-2 rounded-lg shadow flex justify-between items-center border border-border-gray"
          >
            <div className="">
              <div className="flex items-center">
                <span
                  className={`w-4 h-4 block rounded-full border-2 mr-3 mb-2 ${task.statusColor}`}
                ></span>
                <h3 className="font-bold text-gray-700">{task.title}</h3>
                <p className="text-zinc-600 text-[10px] absolute mb-6 right-48">
                  ooo
                </p>
              </div>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-sm mt-2">
                Status:{" "}
                <span className="font-semibold text-green-500">
                  {task.status}
                </span>
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={task.image}
                alt={task.alt}
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasksSection;
