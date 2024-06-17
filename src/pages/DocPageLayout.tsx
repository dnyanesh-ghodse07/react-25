import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

const DocPage = ({
  code,
  component,
}: {
  code: string;
  component: ReactNode;
}) => {
  return (
    <div className="">
      <div>
        <h1 className="text-2xl p-2">Component : </h1>
        <div>{component}</div>
      </div>
      <div>
        <h1 className="text-2xl p-2">Code</h1>
        <SyntaxHighlighter wrapLongLines>{code}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DocPage;
