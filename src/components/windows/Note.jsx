import React from "react";
import "./note.scss";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <MacWindow>
        <div className="note-window">
            {markdown ?  <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter>  : "Loading..."}
        </div>
    </MacWindow>
  );
};

export default Note;
