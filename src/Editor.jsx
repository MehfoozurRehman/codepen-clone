import CodeMirror from "@uiw/react-codemirror";
import CompressedAlt from "./compressed.svg";
import ExpandAlt from "./expand.svg";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { useState } from "react";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  const getLanguageExtension = () => {
    switch (language) {
      case "html":
        return [html()];
      case "css":
        return [css()];
      case "javascript":
        return [javascript()];
      default:
        return [];
    }
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <img
            src={open ? CompressedAlt : ExpandAlt}
            alt={open ? "Collapse" : "Expand"}
          />
        </button>
      </div>
      <CodeMirror
        value={value}
        onChange={onChange}
        extensions={getLanguageExtension()}
        theme={oneDark}
        className="code-mirror-wrapper"
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          dropCursor: false,
          allowMultipleSelections: false,
        }}
      />
    </div>
  );
}
