import useMediaQuery from "../hooks/UseMediaQuery";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


import projectsData from "../../data/ProjectsData";
import Card  from './Card'

import './projects.css';


const Projects = () => {
  console.log(projectsData)
  const isLargeDisplay = useMediaQuery('(max-width: 1320px)');

  return (
    <section id='projects'>

      <div className="container project-container">

        <div className="title_project">
          <h5>My Recent Work</h5>
          <h2>Projects</h2>
        </div>

        
          <div className="projects-wrapper">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  direction={isLargeDisplay ? "vertical" : ''}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className={`mySwiperProjects ${isLargeDisplay ? "lg" : ''}`}
              >

                {projectsData.map((data) => (
                  <SwiperSlide className="mySwiperslide">
                    <Card key={projectsData.id} data={data} />
                  </SwiperSlide>
                
                ))}

              </Swiper>
            
          </div>
        
        
        
      </div>
    </section>
  )
}

export default Projects