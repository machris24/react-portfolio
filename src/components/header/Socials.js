import { BsLinkedin } from 'react-icons/bs';
import { TfiGithub } from 'react-icons/tfi';
import { FaFacebookMessenger } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="header-socials">
       <a href="https://linkedin.com" target='_blank'><BsLinkedin className='socials-icons linkedin'/></a>
       <a href="https://github.com" target='_blank'><TfiGithub className='socials-icons github'/></a>
       <a href="https://www.messenger.com/" target='_blank'><FaFacebookMessenger className='socials-icons facebook'/></a>
    </div>
  )
}

export default Socials