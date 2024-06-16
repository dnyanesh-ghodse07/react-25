import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface AppContextType {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  tab: '',
  setTab: () => {},
});

const Home = () => {
  const [tab, setTab] = useState<string>('');

  return (
    <AppContext.Provider value={{ tab, setTab }}>
      <div className="h-screen w-screen">
        <Header />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};

export default Home;
