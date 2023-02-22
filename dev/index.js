/* eslint-disable no-console */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import InputMask from "../src";

function CustomInput(props) {
  return <input {...props} />;
}

function Input() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <InputMask mask="99/99/9999" value={value} onChange={onChange}>
      <CustomInput />
    </InputMask>
  );
}

function escapeHtml(unsafe) {
  return `${unsafe}`
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const consoleDiv = document.getElementById("console");
const { log } = console;
console.log = (text, ...rest) => {
  log.apply(console, [text, ...rest]);
  consoleDiv.innerHTML = `${escapeHtml(text)}<br/>${consoleDiv.innerHTML}`;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Input />);
