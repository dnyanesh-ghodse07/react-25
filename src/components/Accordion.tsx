import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="bg-slate-100 w-96 shadow-md p-1"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center p-2">
      <h1>{title}</h1>
      <span>{open ? <IoIosArrowDown/>: <IoIosArrowUp/>}</span>
      </div>
      {open && <div className="bg-slate-50 p-2">{children}</div>}
    </div>
  );
};

const Accordion = ({
  items = [
    {
      title: "Title1",
      children: "You can also pass your component",
    },
    {
      title: "Title2",
      children: "You can also pass your component",
    },
  ],
}: {
  items?: { title: string; children: ReactNode }[];
}) => {
  return (
    <div className="m-10 flex flex-col gap-1">
      {items?.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          children={item.children}
        />
      ))}
    </div>
  );
};

export default Accordion;
