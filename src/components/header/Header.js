import ResumeDL from './ResumeDL'
import Socials from './Socials'
import Letterings from './jquery.lettering'
import ME from '../../assets/me.png'
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="header-wrapper">
          <div className='socials'>
          <Socials />
          </div>

          <div className="container name-container">
            <h5 className="title-small">Hello I'm</h5>
            <h1 className="title-big">CHRIS</h1>
            <h3 className="subtitle"> I love exploring, creating and designing websites for better user experience. I have a lifelong passion in learning and I enjoy pretending to be a Disney character and belt out their songs!</h3>
            <ResumeDL />
            
          </div>

          <div className="me">
            <img src={ME} alt="This is me." />
          </div>

          <a href='#contact' className='scroll-down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header