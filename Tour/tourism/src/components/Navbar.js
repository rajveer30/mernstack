import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";



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
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Tourrite
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tours"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tours
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          <Link to="Signin">{button && <button className="login_btn">Sign In</button>}</Link>
          {/* <button className="login_btn">Login</button> */}
        </div>
      </nav>
    </>
  );
}

// export default Navbar;

// </>
           
       
//     )
// }



export default Navbar;


 {/* <nav classNameName="navbar">
                
                <div classNameName="navbar-container">
                    <Link to='/' classNameName='navbar-logo'>
                        TRVL <i classNameName='fab fa-typo3' />
                    </Link>
                    <div classNameName='menu-icon' onClick={handleclick}/>
            <i classNameName={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul classNameName={click ? 'nav-menu active' : 'nav-menu'}>
                    
                <li classNameName='nav-item'>
                        <Link to='/' classNameName='nav-links' onclick={closemobilemenu}>
                            Home
                        </Link>
                    </li>
                    <li classNameName='nav-item'>
                        <Link to='/Services' className='nav-links' onclick={closemobilemenu}>
                            Services
                        </Link>
                    </li><li classNameName='nav-item'>
                        <Link to='/products' className='nav-links' onclick={closemobilemenu}>
                            Products
                        </Link>
                        <li classNameName='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onclick={closemobilemenu}>
                            Sign Up
                        </Link>
                    </li>
                    </li>
                </ul>
        
        </nav> */}