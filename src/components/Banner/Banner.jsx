// src\components\Banner\Banner.jsx
import React from 'react'

function Banner() {
  return (
   <>

{/*Hero Section ======================*/}
<section className="section-hero margin-top-style-2">
  <div className="swiper heroSwiper">
    <div className="swiper-wrapper">					
      <div className="swiper-slide">
        {/* Hero-2 */}
        <div className="hero-2 text-bg-dark overflow-hidden" data-bs-theme="dark">
          <div className="hero-wrapper parallax position-relative">					
            <div className="container position-relative z-2">							
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="hero-inner-text d-flex flex-column gap-20 gap-lg-30 position-relative text-lg-center align-items-lg-center">									
                    <h1 className="mb-0 hero-heading">Cast Your Vote for the Finest Candidates</h1>
                    <p className="mb-0 mb-xxl-30 fs-5 hero-text">We fight for our citizen rights, so join us and make our country more beautiful &amp; natural for all our citizen.</p>
                    <div>
                      <a href="#campaign" className="btn btn-primary btn-lg">Join The Campaign</a>
                    </div>
                  </div>
                  {/* hero-inner-text */}
                </div>
                {/* col-6 */}															
              </div>
              {/* row */}	
            </div>
            {/* container */}	
            <div className="mosque-image-2">
              <img src="images/mosque-image-2.png" className="img-fluid" alt="mosque-image-2" />
            </div>
          </div>
          {/* hero-wrapper */}
        </div>
        {/* Hero-2 */}
      </div>
      {/* swiper-slide */}
      <div className="swiper-slide">
        {/* Hero-4 */}
        <div className="hero-4 text-bg-dark position-relative" data-bs-theme="dark">		
          <div className="video-bg video-bg-overlay">		
            <video muted loop autoPlay>						
              <source src="videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>					
            <div className="hero-wrapper">						
              <div className="container">							
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="hero-inner-text d-flex flex-column gap-20 gap-lg-30 position-relative text-lg-center align-items-lg-center">									
                      <h2 className="mb-0 hero-heading">Cast Your Vote for the Finest Candidates</h2>
                      <p className="mb-0 mb-xxl-30 fs-5 hero-text">We fight for our citizen rights, so join us and make our country more beautiful &amp; natural for all our citizen.</p>
                      <div className="hero-button">
                        <a href="#campaign" className="btn btn-primary btn-lg">Join The Campaign</a>
                      </div>
                    </div>
                    {/* hero-inner-text */}
                  </div>
                  {/* col-6 */}															
                </div>
                {/* row */}	
              </div>
              {/* container */}						
            </div>					
          </div>				
        </div>
        {/* Hero-4 */}
      </div>
      {/* swiper-slide */}
    </div>
    {/* swiper-wrapper */}
  </div>
  {/* heroSwiper */}
</section>



   
   </>
  )
}

export default Banner