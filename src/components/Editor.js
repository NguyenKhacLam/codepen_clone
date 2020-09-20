import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ displayName, language, value, onChange }) {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor__container ${open ? "" : "collapse"}`}>
      <div className="editor__tittle">
        <h3>{displayName}</h3>
        <button
          className="editor__button"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlEditor
        onBeforeChange={handleChange}
        value={value}
        className="editor__codeWrapper"
        options={{
          lineWrapping: true,
          theme: "material",
          lint: true,
          lineNumbers: true,
          mode: language,
        }}
      />
    </div>
  );
}

export default Editor;
