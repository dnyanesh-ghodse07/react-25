import { useContext } from "react";
import SidebarItem from "./SidebarItem";
import { AppContext } from "../App";

const Sidebar = () => {
  const { setTab } = useContext(AppContext);
  const projectList = [
    "accordion",
    "tabs",
    "image-slider",
    "star-rating",
    "random-color-generator",
  ];
  return (
    <div className="flex flex-col gap-2 h-full">
      {projectList.map((item, index) => {
        return (
          <SidebarItem key={item} index={index} label={item} onClick={() => setTab(item)} />
        );
      })}
    </div>
  );
};

export default Sidebar;
