import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowsName, setWindowsState }) => {
  return (
    <MacWindow width='35vw' x='20' y='250' windowsName={windowsName} setWindowsState={setWindowsState} >
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume
