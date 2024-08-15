import React from 'react';
import designIcon from '../../../assets/images/design.png';
import ecommerceIcon from '../../../assets/images/ecommerce.png';
import webIcon from '../../../assets/images/web.png';
import './service.css';


const Service = () => {
  return (
    <>
        <div className="container mt-3">
            <h1 className="serviceMainTitle">MY SERVICES</h1>
            <div className="bottom"></div>

            <div className="row my-5">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="serviceContainer">
                        <img src={ecommerceIcon} alt="" />
                        <h2 className="serviceName">Ecommerce</h2>
                        <p className='serviceDesc'>I can build any kind of ecommerce websites, softwares & applications.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="serviceContainer">
                        <img src={designIcon} alt="" />
                        <h2 className='serviceName'>Web Design</h2>
                        <p className='serviceDesc'>We can provide you amazing website design, wordpress theme, template etc</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="serviceContainer">
                        <img src={webIcon} alt="" />
                        <h2 className='serviceName'>Software Development</h2>
                        <p className='serviceDesc'>I can develop highly performed, optimize website & software development</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service;