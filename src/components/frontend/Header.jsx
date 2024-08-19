import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import blackLogo from '../../assets/images/logo_black.png';
import whiteLogo from '../../assets/images/logo_white.png';
import './header.css';

const Header = () => {
  const [navbar, setNavbar] = useState({
    navbarText: 'navbarText mx-3',
    logo: [whiteLogo],
    navbarBackground: 'navbarBackground'
  });

  const navigate = useNavigate();
  
  const token = localStorage.getItem('token');

  const logout = () =>{
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY > 100) {
        setNavbar({
          navbarBackground: 'navbarBackgroundScroll',
          logo: [blackLogo],
          navbarText: 'navbarTextScroll mx-3',
        })
      } else {
        setNavbar({
          navbarText: 'navbarText mx-3',
          logo: [whiteLogo],
          navbarBackground: 'navbarBackground'
      })
      }
    }
  
    window.addEventListener('scroll', scrollHandle);
  }, []);
  
  return (
    <>
<Navbar collapseOnSelect expand="lg" fixed='top' className={navbar.navbarBackground}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={navbar.logo} className='nav-logo' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>

          <Nav>
            <Nav.Link >
              <Link to="/" style={{textDecoration: 'none'}} className={navbar.navbarText}>Home</Link>
            </Nav.Link>
            
            <Nav.Link >
              <Link style={{textDecoration: 'none'}} className={navbar.navbarText}to="/about">About</Link>
            </Nav.Link>

            <Nav.Link >
              <Link style={{textDecoration: 'none'}} className={navbar.navbarText}to="/contact">Contact Us</Link>
            </Nav.Link>

            {token && <Nav.Link>
              <Link to="/profile" style={{textDecoration: 'none'}}  className={navbar.navbarText}>Profile</Link>
            </Nav.Link>
            }

            {token && <Nav.Link >
              <Link  className={navbar.navbarText} onClick={logout} style={{textDecoration: 'none'}}>Logout</Link>
            </Nav.Link>
            }

            {!token && <Nav.Link >
              <Link to="/login" style={{textDecoration: 'none'}} className={navbar.navbarText}>Login</Link>
            </Nav.Link>
            }
            
            {!token && <Nav.Link >
              <Link to="/register"  style={{textDecoration: 'none'}} className={navbar.navbarText}>Register</Link>
            </Nav.Link>
            }
                        
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header;