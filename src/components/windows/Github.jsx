import React from "react";
import MacWindow from "./MacWindow";
import GithubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description' >{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag' >{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink} target="_blank">Repository</a>
            {data.demoLink && <a href={data.demoLink} target="_blank">Demo link</a>}
        </div>
    </div>
}


const Github = ({ windowsName, setWindowsState }) => {
  return (
    <MacWindow x='10' y='50' windowsName={windowsName} setWindowsState={setWindowsState} >
      <div className="cards">
        {GithubData.map((project) => {
          return <GitCard data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
