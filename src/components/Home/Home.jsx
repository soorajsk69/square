import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="banner-container">
        <div className="content-container">
          <div className="text-center">
            <h1 className='home-head'>Welcome Square Center</h1>
            <p className='home-dis'>we have always strived for benchmark quality, customer-centric approach, robust engineering, in-house research.</p>
            <button className='call-us-btn'>Call Us</button>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
