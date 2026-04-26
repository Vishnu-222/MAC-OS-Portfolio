import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";


function App() {

  return (
    <>
      <main>
        <Navbar />
        <Dock />
        
        <Github />
        <Note />
        <Resume />
        <Spotify />
      </main>
    </>
  )
}

export default App
