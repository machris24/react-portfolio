import projectsData from "../../data/ProjectsData";
import Card  from './Card'

import './projects.css';


const Projects = () => {
  console.log(projectsData)

  return (
    <section id='projects'>

      <div className="container project-container">

        <div className="title_project">
          <h5>My Recent Work</h5>
          <h2>Projects</h2>
        </div>

        
          <div className="projects-wrapper">
            {projectsData.map((data) => (
              <Card key={projectsData.id} data={data} />
            ))}
            
          </div>
        
        
        
      </div>
    </section>
  )
}

export default Projects