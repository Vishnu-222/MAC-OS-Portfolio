import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className = "dock">
      <div className=" icon chatgpt"
      onClick={()=>{window.open("https://chatgpt.com/" ,"_blank")}}>
        <img src="./dock-icons/chatgpt.svg" alt="" />
      </div>
      <div className="icon note"
      onClick={() => { setWindowsState(state => ({ ...state, note: !state.note })) }}>
        <img src="./dock-icons/note.svg" alt="" />
      </div>
      <div className="icon calender"
       onClick={()=>{window.open("https://calendar.google.com/","_blank")}}>
        <img src="./dock-icons/calender.svg" alt="" />
      </div>
      <div className="icon pdf"
      onClick={() => { setWindowsState(state => ({ ...state, resume: !state.resume })) }}>
        <img src="./dock-icons/pdf.svg" alt="" />
      </div>
      <div className=" icon instagram"
      onClick={()=>{window.open("https://www.instagram.com/_its_vishnuuuu__" , "_blank")}}>
        <img src="./dock-icons/instagram.svg" alt="" />
      </div>
      <div className="icon github"
      onClick={() => { setWindowsState(state => ({ ...state, github: !state.github })) }}>
        <img src="./dock-icons/github.svg" alt="" />
      </div>
      <div className=" icon leetcode"
      onClick={()=>{window.open("https://leetcode.com/u/vs414447/","_blank")}}>
        <img src="./dock-icons/leetcode.svg" alt="" />
      </div>
      <div className="icon mail"
      onClick={()=>{window.open("mailto:vs414447@gmail.com","_blank")}}>
        <img src="./dock-icons/mail.svg" alt="" />
      </div>
      <div className="icon spotify"
      onClick={() => { setWindowsState(state => ({ ...state, spotify: !state.spotify })) }}>
        <img src="./dock-icons/spotify.svg" alt="" />
      </div>
      <div className="icon link"
      onClick={()=>{window.open("https://www.linkedin.com/in/vishnu-singh-435116237/","_blank")}}>
        <img src="./dock-icons/link.svg" alt="" />
      </div>
      <div className="icon cli"
      onClick={() => { setWindowsState(state => ({ ...state, cli: !state.cli })) }}>
        <img src="./dock-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
