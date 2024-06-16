import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="p-2 border-r-2 mr-2 min-w-36 max-w-56">
          <Sidebar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Projects;
