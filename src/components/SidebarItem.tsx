import { Link } from "react-router-dom";
import { formatString } from "../utilities/formatLabelString";

const SidebarItem = ({
  label,
  onClick,
  index,
}: {
  label: string;
  onClick: () => void;
  index: number
}) => {
  return (
    <div className="text-blue-400 hover:text-blue-600">
      <Link onClick={onClick} className="capitalize" to={label}>
        {index}) {formatString(label)}
      </Link>
    </div>
  );
};

export default SidebarItem;
