import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";

function App() {

  return (
    <>
      <main>
        <Navbar />
        <Dock />
        
        <Github />
        <Note />
      </main>
    </>
  )
}

export default App
