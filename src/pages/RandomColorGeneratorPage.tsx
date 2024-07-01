import RandomColorGenerator from "../components/RandomColorGenerator";
import DocPage from "./DocPageLayout";

const code = `import { useState } from "react";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("ffffff");

  const handleGenerateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  const handleCopyColor = () => {
    const textarea = document.createElement('textarea');
    textarea.value = \`#\${color}\`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(\`Color \${color} copied to clipboard!\`);
  };

  return (
    <div
      className="w-full h-1/2 flex justify-center items-center"
      style={{ backgroundColor:\`#\${color}\` }}
    >
      <div className="flex flex-col gap-2">
        <input readOnly type="text" value={\`#\${color}\`} className="p-2 rounded-md" />
        <button
          className="p-2 shadow-md bg-gray-300 rounded-md"
          onClick={handleCopyColor}
        >
          Copy Color
        </button>
        <button
          className="p-2 shadow-md bg-gray-300 rounded-md"
          onClick={handleGenerateRandomColor}
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
`



const RandomColorGeneratorPage = () => {
  return <div className="">
    <DocPage code={code} component={<RandomColorGenerator />} />
  </div>
};

export default RandomColorGeneratorPage;
