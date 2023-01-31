import { useState } from 'react';

import { FaRegUserCircle, FaCode } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import { TbMessage2 } from 'react-icons/tb';
import './nav.css';

const Nav = () => {

  const [isActive, setIsActive] = useState('#')

  return (
    <nav>
      <a href='#' 
        onClick={() => setIsActive('#')}
        className={ isActive === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>

      <a href='#about' 
        onClick={() => setIsActive('#about')}
        className={isActive === '#about' ? 'active' : ''}>
        <FaRegUserCircle />
      </a>

      <a href='#experience'
        onClick={() => setIsActive('#experience')}
        className={isActive === '#experience' ? 'active' : ''}>
        <FaCode />
      </a>

      <a href='#projects' 
        onClick={() => setIsActive('#projects')}
        className={isActive === '#projects' ? 'active' : ''}>
        <VscFolderLibrary />
      </a>

      <a href='#contact'
        onClick={() => setIsActive('#contact')}
        className={isActive === '#contact' ? 'active' : ''}>
        <TbMessage2 />
      </a>
      
    </nav>
  )
}

export default Nav