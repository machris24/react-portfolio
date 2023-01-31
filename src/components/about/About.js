import { motion } from 'framer-motion';

import PHOTO from '../../assets/about1.png';
import { GiFireSpellCast, GiStrong, GiWeightLiftingUp } from 'react-icons/gi';
import FloatingImage from './FloatingImage';

import Admin from '../../assets/3d/administration.png';
import WebDev from '../../assets/3d/coding.png';
import Content from '../../assets/3d/content.png';
import CustS from '../../assets/3d/customer_support.png';
import HumanR from '../../assets/3d/HR.png';
import InfluencerM from '../../assets/3d/influencer_marketing.png';
import './about.css';

const About = () => {

  const transition = {duration : 2, type: 'spring'}

  return (
    <section id='about'>
  
        <div className="container about-container">

            <div className="title_about">
              <h5 className='small-title'>Get To Know</h5>
              <h2 className='title'>Who is Chris?</h2>
            </div>

              <div className="about-me">

                <div className="about-me-photo">
                  <img src={PHOTO} alt="me" />
                </div>

                {/* <div className="floaters"> */}
                    <motion.div
                      initial={{top: '45%', left: '20%', zIndex: 12 }}
                      whileInView={{left: '25%'}}
                      whileHover={{left: '50%'}}
                      transition={transition}

                      className="floating_web">
                        <span>
                            Web
                            <br />
                            Developer
                        </span>
                        <img src={WebDev} alt='Web Development' />
                      </motion.div>

                      <motion.div
                      initial={{top: '5%', left: '17%', zIndex: 5 }}
                      whileInView={{left: '55%'}}
                      whileHover={{left: '22%', zIndex: 12 }}
                      transition={transition}
                      
                      className="floating_content">
                        <FloatingImage image={Content} txt1='Content' txt2='Creator'/>
                      </motion.div>

                      <motion.div
                      initial={{top: '20%', left: '2%', zIndex: 9 }}
                      whileInView={{left: '30%'}}
                      whileHover={{left: '4%', zIndex: 12 }}
                      transition={transition}
                      
                      className="floating_influencer">
                        <FloatingImage image={InfluencerM} txt1='Influencer' txt2='Marketer'/>
                      </motion.div>

                      <motion.div
                      initial={{top: '-20%', left: '15%'}}
                      whileInView={{top: '-10%', left: '24%', zIndex: -3}}
                      whileHover={{top: '6%'}}
                      transition={transition}
                      
                      className="floating_hr">
                        <FloatingImage image={HumanR} txt1='HR' txt2='Generalist'/>
                      </motion.div>

                      <motion.div
                      initial={{bottom: '25%', left: '23%'}}
                      whileInView={{left: '50%'}}
                      transition={transition}
                      
                      className="floating_admin">
                        <FloatingImage image={Admin} txt1='Administrative' txt2='Executive'/>
                      </motion.div>

                      <motion.div
                      initial={{bottom: '-5%', left: '6%'}}
                      whileInView={{left: '45%', zIndex: -3}}
                      transition={transition}
                      
                      className="floating_cust">
                        <FloatingImage image={CustS} txt1='Technical' txt2='Support'/>
                      </motion.div>
                {/* </div> */}

              </div>

              <div className='about-content'>

                <div className="about-cards">
                  <article className='about-card'>
                    <GiWeightLiftingUp className='about-icon'/>
                    <h5>Trainings</h5>
                    <small>20+ Certificates</small>
                  </article>

                  <article className='about-card'>
                    <GiFireSpellCast className='about-icon'/>
                    <h5>Projects</h5>
                    <small>3+ and counting</small>
                  </article>

                  <article className='about-card'>
                    <GiStrong className='about-icon'/>
                    <h5>Skills</h5>
                    <small>50+</small>
                  </article>

                </div>

                <div className="text-contents">

                  <h3>Interested in all things web and now a Web Developer - could be Frontend or Backend! - with a flair for colors and glam.</h3>

                  <p>
                    I contributed and acted on in different industries but things in the web always fascinate me both on a technical and visual level. User experience, beautiful pixels, and writing human-readable, clean code matter to me. A lot of effort and sweat goes into the details.
                    <br /> <br />
                    Creating, learning, exploring, and thinking about how to improve things makes me happiest.
                  </p>

                  <a href='#contact' className='btn btn-primary-color-light'>Let's Talk</a>

                </div>

              </div>

      </div>
    </section>
  )
}

export default About;