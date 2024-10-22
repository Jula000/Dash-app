"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CompletedTasksSection from "./CompletedTasksSection";

interface Status {
  label: string;
  percentage: number;
  color: string;
}

interface TaskStatusSectionProps {
  statuses: Status[];
}

const TaskStatusSection: React.FC<TaskStatusSectionProps> = ({ statuses }) => {
  return (
    <div className="p-5 bg-main-white rounded-lg shadow-xl">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
        <span className="mr-2 text-red-500">Task Status</span>
      </h2>
      <div className="grid-cols-3 gap-6 flex">
        {statuses.map((status, index) => (
          <div
            key={index}
            className="bg-white-main p-4 rounded-lg flex flex-col items-center justify-center"
          >
            <div style={{ width: "100px", height: "100px" }}>
              <CircularProgressbar
                value={status.percentage}
                text={`${status.percentage}%`}
                styles={buildStyles({
                  pathColor: status.color,
                  textColor: "#000",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
            <div className="mt-4 flex items-center">
              <span className="mr-2" style={{ color: status.color }}>
                •
              </span>
              <p className="text-gray-700">{status.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatusSection;
