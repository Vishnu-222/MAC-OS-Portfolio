import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = () => {
  return (
    <MacWindow width='35vw'> 
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume
