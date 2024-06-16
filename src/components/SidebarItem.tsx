import { Link } from "react-router-dom";

const SidebarItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <div className="shadow-md p-2">
      <Link onClick={onClick} className="capitalize" to={label}>
        {label}
      </Link>
    </div>
  );
};

export default SidebarItem;
