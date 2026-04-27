import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowsName, setWindowsState }) => {
  return (
    <div>
      <MacWindow width='25vw' x='1100' y='10' windowsName={windowsName} setWindowsState={setWindowsState} >
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/1IvEH3HDObcFnkFW6zeWvM?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </MacWindow>

    </div>
  )
}
export default Spotify
