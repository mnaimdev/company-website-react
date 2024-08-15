import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  const token = localStorage.getItem('token');

  const logout = () =>{
    localStorage.clear();
    navigate('/');
  }
  
  return (
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">Easy Shop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        
        {token && <li className="nav-item">
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </li>}
      </ul>
      <span className="navbar-text">
        {token && <ul className="navbar-nav">
            <li className="nav-item">
            <button className='btn btn-dark' onClick={logout}>Logout</button>
            </li>
        </ul>}

        {!token && <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to="/login" class="nav-link" style={{marginRight: '20px', textDecoration: 'none'}}>Login</NavLink>

            </li>
            <li className="nav-item">
            <NavLink to="/register" class="nav-link" style={{marginRight: '20px', textDecoration: 'none'}}>Register</NavLink>
            </li>
        </ul> }
        
      </span>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Header;