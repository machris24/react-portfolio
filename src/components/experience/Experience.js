import { FaReact, FaGitAlt, FaCss3, FaJsSquare, FaHtml5  } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>

    <div className="experience-wrapper">
    <div className="cube-container">
          <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <SiMongodb color="#DD0031" />
                </div>
                <div className="face2">
                  <FaHtml5 color="#F06529" />
                </div>
                <div className="face3">
                  <FaCss3 color="#28A4D9" />
                </div>
                <div className="face4">
                  <FaReact color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FaJsSquare color="#EFD81D" />
                </div>
                <div className="face6">
                  <FaGitAlt color="#EC4D28" />
                </div>
              </div>
          </div>
          </div>
      
      <div className="container experience-container">

        <div className="title_exp">
          <h5 className='small-title_exp'>What Do I Have?</h5>
          <h2 className='title_exp'>My Skills</h2>
        </div>

        <div className="experience-front">
          <div className="box">
            <div className="content">

              <h3>Frontend&#125;</h3>

              <div className="experience-content frontend">
                <article className='experience-details s-stretch'>
                  <h4>HTML</h4>
                </article>

                <article className='experience-details'>
                  <h4>CSS</h4>
                </article>

                <article className='experience-details l-stretch'>
                  <h4>JavaScript</h4>
                </article>

                <article className='experience-details l-stretch'>
                  <h4>Bootstrap</h4>
                </article>

                <article className='experience-details m-stretch'>
                  <h4>React</h4>
                </article>

                <article className='experience-details m-stretch'>
                  <h4>ESLint</h4>
                </article>

                <article className='experience-details l-stretch'>
                  <h4>MaterialUI</h4>
                </article>

              </div>

            </div>

          </div>
        </div>

        

        <div className="experience-back">
          <div className="box">
            <div className="content">

              <h3>&#60;Backend</h3>
              
              <div className="experience-content backend">
                <article className='experience-details m-stretch'>
                  <h4>MongoDb</h4>
                </article>

                <article className='experience-details m-stretch'>
                  <h4>Nodejs</h4>
                </article>

                <article className='experience-details m-stretch'>
                  <h4>Python</h4>
                </article>

                <article className='experience-details'>
                  <h4>PHP</h4>
                </article>

                <article className='experience-details l-stretch'>
                  <h4>Expressjs</h4>
                </article>

                <article className='experience-details'>
                  <h4>MySQL</h4>
                </article>

                <article className='experience-details'>
                  <h4>HTTP</h4>
                </article>

                <article className='experience-details'>
                  <h4>CORS</h4>
                </article>

                <article className='experience-details'>
                  <h4>REST API</h4>
                </article>

                <article className='experience-details'>
                  <h4>JSON</h4>
                </article>
              </div>

            </div>
          </div>
          
        </div>

        <div className="experience-tools">
          <div className="box">
            <div className="content">

              <h3>&#36;Tools</h3>

                <div className="experience-content tools">
                  <article className='experience-details l-stretch'>
                    <h4>VsCode</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>GitHub</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>GitLab</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>Bash</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>Figma</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>Render</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>Vercel</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>Postman</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>npm</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>xampp</h4>
                  </article>

                  <article className='experience-details'>
                    <h4>Robo3T</h4>
                  </article>
                </div>
            </div>
          </div>
        </div>

      </div>

    </div>
      

    </section>
  )
}

export default Experience