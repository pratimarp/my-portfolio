import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        axios
          .get("https://run.mocky.io/v3/53fcba87-96ab-45a7-89b3-de060e985d55") 
          .then((response) => setProjects(response.data.projects))
          .catch((error) => console.error("Error fetching data", error));
      }, []);
    
    return (
        <section className="projects">
            <h2 className="section-title">Selected Projects</h2>
            {projects.map((project) => (
                <div key={project.id} className="project">
                    <div className="info">
                        <p className="year">{project.year}</p>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="brief">{project.brief}</p>
                        <a className="tile-link" href={project.link} target="_blank" rel="noreferrer">
                        Try it out &#8599;
                    </a>
                    </div>
                    <div className="tile-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            ))}   
            <a className="view-all" href="#projects" target="_blank">View all projects &#8594;</a>
        </section>
    )
}

export default Projects;