import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";


function App() {
  
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <>
      <main>
        <Navbar />
        <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
        
        {windowsState.github && <Github windowsName="github" setWindowsState={setWindowsState} />}
        {windowsState.note && <Note windowsName="note" setWindowsState={setWindowsState} />}
        {windowsState.resume && <Resume windowsName="resume" setWindowsState={setWindowsState} />}
        {windowsState.spotify && <Spotify windowsName="spotify" setWindowsState={setWindowsState} />}
        {windowsState.cli && <Cli windowsName="cli" setWindowsState={setWindowsState} />}

      </main>
    </>
  )
}

export default App
