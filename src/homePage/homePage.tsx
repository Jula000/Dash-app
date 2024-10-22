import React from "react";
import WelcomeSection from "./WelcomeSection";
import ToDoSection from "./ToDoSection";
import CompletedTasksSection from "./CompletedTasksSection";
import "react-circular-progressbar/dist/styles.css";
import dynamic from "next/dynamic";

const TaskStatusSection = dynamic(() => import("./TaskStatusSection"), {
  ssr: false,
});

export default function HomePage() {
  const toDoTasks = [
    {
      title: "Attend Nischal’s Birthday Party",
      description:
        "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)",
      priority: "Moderate",
      status: "Not Started",
      statusColor: "text-red-500",
      imageUrl: "/2.jpg",
      createdOn: "20/06/2023",
    },
    {
      title: "Landing Page Design for TravelDays",
      description:
        "Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)",
      priority: "Moderate",
      status: "In Progress",
      statusColor: "text-blue-500",
      imageUrl: "/2.jpg",
      createdOn: "20/06/2023",
    },
    {
      title: "Presentation on Final Product",
      description:
        "Make sure everything is functioning and all the necessities are properly met.",
      priority: "Moderate",
      status: "In Progress",
      statusColor: "text-blue-500",
      imageUrl: "/2.jpg",
      createdOn: "19/06/2023",
    },
  ];

  const taskStatuses = [
    { label: "Completed", percentage: 84, color: "#22c55e" }, // Green
    { label: "In Progress", percentage: 46, color: "#3b82f6" }, // Blue
    { label: "Not Started", percentage: 13, color: "#ef4444" }, // Red
  ];

  const completedTasks = [
    {
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.",
      status: "Completed",
      statusColor: "text-green-500", // Додайте цей рядок
      image: "/photo1.png",
      alt: "Dog",
    },
    {
      title: "Conduct meeting",
      description: "Meet with the client and finalize requirements.",
      status: "Completed",
      statusColor: "text-green-500", // Додайте цей рядок
      image: "/photo1.png",
      alt: "Meeting",
    },
  ];

  const avatars = [
    "/2.jpg",
    "/2.jpg",
    "/2.jpg",
    "/2.jpg",
    "/2.jpg",
    "/2.jpg", // Extra avatar to demonstrate the +N feature
  ];

  return (
    <main className="mx-10 w-full bg-white-main text-black">
      <WelcomeSection name="Sundar" avatars={avatars} />
      <div className="flex">
        <section className="">
          <div className="col-span-2 p-6">
            <ToDoSection tasks={toDoTasks} />
          </div>
        </section>
        <section className="">
          <div className="bg-gray-50 rounded-lg  shadow-xl">
            <TaskStatusSection statuses={taskStatuses} />{" "}
          </div>
          <div>
            <CompletedTasksSection completedTasks={completedTasks} />
          </div>
        </section>
      </div>
    </main>
  );
}
