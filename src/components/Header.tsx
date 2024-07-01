import { useContext } from "react";
import { AppContext } from "../App";
import { formatString } from "../utilities/formatLabelString";

import { IoLogoReact } from "react-icons/io5";

const Header = () => {
  const { tab } = useContext(AppContext);
  return (
    <div className="shadow-sm p-4 text-center">
      <div className="flex gap-2 justify-center items-center">
        <IoLogoReact className="text-blue-500" size={40}/>
        <h1 className="text-4xl text-slate-400 capitalize">
          React 25 : {formatString(tab)}
        </h1>
      </div>
    </div>
  );
};

export default Header;
