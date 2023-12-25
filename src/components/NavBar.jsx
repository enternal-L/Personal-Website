import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link className='navbar-logo' onClick={() => {
            closeMobileMenu()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            £nternal
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link className='nav-links' onClick={() => {
                  closeMobileMenu()
                  if(window.innerWidth <= 960){
                    window.scrollTo({ top: 900, behavior: 'smooth' })
                  }
                  else{
                    window.scrollTo({ top: 880, behavior: 'smooth' })
                  }
                }}>
                Who am I?
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={() => {
                  closeMobileMenu()
                  if(window.innerWidth <= 960){
                    window.scrollTo({ top: 2050, behavior: 'smooth' })
                  }
                  else{
                    window.scrollTo({ top: 1740, behavior: 'smooth' })
                  }
                }}
                smooth
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;


