import { UnControlled as CodeMirror } from "react-codemirror2";
import { useState } from "react";
import "../App.css";
import { Editor } from "./Editor";
import Header from "./Header";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const srcDoc = `
 <html>
  <body>${html}</body>
  <style>${css}</style>
 </html>

 `;
  return (
    <>
      <div className="container p-4">
        <Header />
        <div className="flex justify-between p-4 ">
          <div className="editor-section">
            <Editor
              value={html}
              onChange={setHtml}
              language="xml"
              displayName="HTML"
            />
            <Editor
              value={css}
              onChange={setCss}
              language="css"
              displayName="CSS"
            />
          </div>
          <div className="flex-50 border rounded">
            <header className="py-4 px-4 border-b-2	">
              <h4 className="text-center text-2xl">Output</h4>
            </header>
            <iframe srcDoc={srcDoc} title="output" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
