import Arrow from '../../assets/arrow.png'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <img className='arrow' src={Arrow} alt="arrow" />
      <a href='#' className='footer-up'>Bact to Top</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#qualifications">Qualifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://linkedIn.com"><FaLinkedinIn /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; ChrisPsangalang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer