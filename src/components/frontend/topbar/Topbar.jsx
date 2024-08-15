import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <>
        <div className="topbarContainer p-0">
       
            <div className="overlay"></div>
            <div className="bannerContent">
                <h1 className='text-white siteTitle'>Simple Learning.</h1>
                <p className='siteDesc my-3 text-white'>Learn professionally with us</p>
                <button className='btn btn-primary'>Explore More</button>
        </div>
           
        </div>
        
    </>
  )
}

export default Topbar;