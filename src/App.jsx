import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import MacWindow from "./components/windows/MacWindow";

function App() {

  return (
    <>
      <main>
        <Navbar />
        <MacWindow>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus soluta iusto officiis totam tenetur voluptates dolores assumenda odit, possimus, a esse? Labore consectetur pariatur provident et numquam quaerat dolorum unde.
          </p>
        </MacWindow>
        <Dock />
      </main>
    </>
  )
}

export default App
