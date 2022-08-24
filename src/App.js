import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "./useLocalStorage";
import "./App.css";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      <html/>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  function toggle_btn() {
    const checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    let trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 200);
    };
  }

  return (
    <>
      <div className="top-pane">
        <div className="header">
          <div className="app-name">Code Pen Clone</div>
          <div class="toggle-container">
            <input
              type="checkbox"
              id="switch"
              name="theme"
              onClick={toggle_btn}
            />
            <label for="switch">Toggle</label>
          </div>
        </div>
        <div className="editors">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascirpt"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
