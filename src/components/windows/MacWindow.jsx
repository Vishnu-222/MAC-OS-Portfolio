import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children , width = "40vw", height = "55vh" , x = 100 , y = 100 , windowsName, setWindowsState }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: x,
        y: y,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={() => setWindowsState(state => ({ ...state, [windowsName]: false }))}className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>vishnusingh - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
