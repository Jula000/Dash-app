import DashboardHeader from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HomePage from "@/homePage/homePage";

export default function Home() {
  return (
    <main className="bg-main-white">
      <DashboardHeader />
      <div className="flex justify-between">
        <Sidebar />
        <HomePage />
      </div>
    </main>
  );
}
