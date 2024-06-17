import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Sidebar from "./components/Sidebar";

interface AppContextType {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  tab: "",
  setTab: () => {},
});

const Home = () => {
  const [tab, setTab] = useState<string>("");

  return (
    <AppContext.Provider value={{ tab, setTab }}>
      <div className="flex flex-col h-screen w-screen">
        <div className="">
          <Header />
        </div>
        <div className="flex h-full w-full">
          <div className="p-2 border-r-2 mr-2 min-w-36 max-w-56">
            <Sidebar />
          </div>
          <main className="w-full h-full overflow-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Home;
