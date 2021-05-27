import { Controlled as ControllEditor } from "react-codemirror2";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");

export function Editor(props) {
  const { language, displayName, value, onChange } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container rounded bg-gray-200 pb-4 my-4">
      <div className="editor-title bg-gray-300 p-2">{displayName}</div>
      <ControllEditor
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
        onBeforeChange={handleChange}
      />
    </div>
  );
}
