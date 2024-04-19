import LeftSideBar from "./components/LeftSideBar";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  return <main className="flex">
    <LeftSideBar />
    <div className="main-content w-full"></div>
    <RightSidebar />
  </main>;
}
