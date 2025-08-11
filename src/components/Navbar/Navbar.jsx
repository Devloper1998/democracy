// src\components\Navbar\Navbar.jsx
import React from 'react'

function Navbar() {
  return (
    <>
<div>
  {/*Header Section ======================*/}
  <header className="section-header header-2 sticky-navbar">
    <div className="top-bar bg-secondary text-bg-dark py-3 d-none d-xl-block" data-bs-theme="dark">
      <div className="container">						
        <div className="row g-20 align-items-center justify-content-between">
          <div className="col-lg-9">
            <ul className="top-bar-contact-lists list-unstyled mb-0 d-flex flex-column gap-2 flex-lg-row gap-lg-20">
              <li className="d-flex gap-2 align-items-center">
                <span className="mail-icon topbar-contact-icon icon-border">											
                  <svg width={12} height={12}><use xlinkHref="#mail-icon" /></svg> 
                </span>											
                <p className="mb-0 fw-medium"><a href="mailto:info@logistics.com" className="text-decoration-none link-hover-animation-1">info@universityofdemocracy.com</a></p>
              </li>
              {/* <li class="d-flex gap-2 align-items-center">
										<span class="location-icon topbar-contact-icon icon-border">											
											<svg width="14" height="14"><use xlink:href="#location-icon"></use></svg> 
										</span>											
										<p class="mb-0 fw-medium"><a href="#" class="text-decoration-none link-hover-animation-1">265 New Ave, Califonia, USA.</a></p>
									</li> */}
              <li className="d-flex gap-2 align-items-center">
                <span className="phone-icon topbar-contact-icon icon-border">											
                  <svg width={12} height={12}><use xlinkHref="#phone-icon" /></svg> 
                </span>
                <p className="mb-0 fw-medium"><a href="tel:(+0123)234556789" className="text-decoration-none link-hover-animation-1">(+0123) 2345 56789</a></p>
              </li>											
            </ul>
            {/* top-bar-contact-lists */}
          </div>
          {/* col-6 */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center justify-content-lg-end gap-10 social-icons text-white">
              <p className="mb-0 fw-medium">Follow Us:</p>
              <a href="#" className="text-decoration-none" aria-label="social-icon">
                <span className="facebook-icon">											
                  <svg width={5} height={10}><use xlinkHref="#facebook-icon" /></svg> 
                </span>
              </a>
              <a href="#" className="text-decoration-none" aria-label="social-icon">
                <span className="twitter-icon">											
                  <svg width={11} height={9}><use xlinkHref="#twitter-icon" /></svg> 
                </span>
              </a>									
              <a href="#" className="text-decoration-none" aria-label="social-icon">
                <span className="linkedin-icon">											
                  <svg width={10} height={9}><use xlinkHref="#linkedin-icon" /></svg> 
                </span>
              </a>																		
            </div>	
            {/* social-icons */}
          </div>
          {/* col-3 */}
        </div>
        {/* row */}							
      </div>
      {/* container */}
    </div>
    {/* top-bar */}
<div className="container-fluid bg-white sticky-top">
  <div className="row">
    <div className="col-12 justify-content-between align-items-center text-center d-none d-lg-block demo" style={{borderBottom: '2px solid #3168ffea'}}>
      <a className="navbar-brand" href="index.php">University of Democracy</a>
      <p>(Unifying Wisdom for a Better Democracy)</p>
    </div>
    <div className="col-12 justify-content-between align-items-center text-center d-block d-lg-none p-0">
      <a className="navbar-brand p-0 m-0" href="index.php">University of Democracy</a>
    </div>
  </div>
</div>

    <nav className="navbar navbar-expand-xl navbar-light nav-border hover-menu">	
      <div className="container">										
        {/* <a className="navbar-brand py-2 py-xl-0" href="index.html">
          <span className="logo">
            <img src="assets/images/logo-dark.png" alt="logo-dark" />		
          </span>						
        </a> */}
        <a href="javascript:void(0)" className="text-decoration-none d-block d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#politixyNavbar" aria-controls="politixyNavbar" aria-label="Toggle navigation">
          <svg width={40} height={23} viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="1.5" x2="38.5" y2="1.5" stroke="#253B2F" strokeWidth={3} strokeLinecap="round" />
            <line x1="1.5" y1="11.5" x2="38.5" y2="11.5" stroke="#253B2F" strokeWidth={3} strokeLinecap="round" />
            <line x1="21.5" y1="21.5" x2="38.5" y2="21.5" stroke="#253B2F" strokeWidth={3} strokeLinecap="round" />
          </svg> 
        </a>
        <div className="collapse navbar-collapse">	
          <ul className="navbar-nav gap-30 gap-lg-20  flex-grow-1 align-items-xl-center">
            <li className="nav-item dropdown">
              <a className="nav-link active d-inline-flex gap-2 align-items-center" aria-current="page" href="#" aria-label="nav-links" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="nav-title">
                  Home
                </span>
             									
              </a>
          																	
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html" aria-label="nav-links">
                The People Project 																			   
              </a>						
            </li>	
            <li className="nav-item">
              <a className="nav-link" href="about.html" aria-label="nav-links">
               Democracy Research Laboratory																			   
              </a>						
            </li>
            <li className="nav-item">
              <a className="nav-link" href="democracy-lab.html" aria-label="nav-links">
               The Change Makers
              </a>						
            </li>
            <li className="nav-item">
              <a className="nav-link" href="change-makers.html" aria-label="nav-links">
               The Democracy Activities 
              </a>						
            </li>
            <li className="nav-item">
              <a className="nav-link" href="civil-society.html" aria-label="nav-links">
                Gallery 
              </a>						
            </li>
            <li className="nav-item">
              <a className="nav-link" href="activities.html" aria-label="nav-links">
               Disclaimers 
              </a>						
            </li>

              <li className="nav-item">
              <a className="nav-link" href="activities.html" aria-label="nav-links">
               The Civil Society  
              </a>						
            </li>
     
            <li className="nav-item">
              <a className="nav-link" href="contact-1.html">
                <span className="nav-title">
                  Contact us
                </span>																			   
              </a>									
            </li>
            {/* <li class="nav-item">
									<a class="btn btn-sm btn-primary" href="donate-1.html">
										Contribute										   
									</a>									
								</li>	 */}						
          </ul>	
        </div>
      </div>	
      {/* container-fluid */}
    </nav>		
  </header>
  {/*Header Section ======================*/}
  
  {/*Mobile-Header ======================*/}
  <nav className="navbar navbar-light nav-border hover-menu" aria-label="Offcanvas navbar large">
    <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={-1} id="politixyNavbar" aria-labelledby="politixyNavbarLabel">
      <div className="offcanvas-header">
        <span className="offcanvas-title" id="politixyNavbarLabel">
          <span className="logo">
            <img src="assets/images/logo-dark.png" alt="logo-dark" />	
          </span>
        </span>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav gap-30 gap-lg-40 justify-content-end flex-grow-1 align-items-xl-center">
          <li className="nav-item dropdown">
            <a className="nav-link active d-inline-flex gap-2 align-items-center" aria-current="page" href="#" aria-label="nav-links" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="nav-title">
                Home
              </span>
              <span className="dropdown-icon">											
                <svg width={12} height={8}><use xlinkHref="#chevron-down-icon" /></svg> 
              </span>										
            </a>
            <ul className="dropdown-menu shadow">
              <li><a className="dropdown-item" href="home-1.html" aria-label="single-pages">
                  <span>Home 1</span>												
                </a>
              </li>										
              <li><a className="dropdown-item" href="home-2.html" aria-label="single-pages">
                  <span>Home 2</span>
                </a>
              </li>	
              <li><a className="dropdown-item" href="home-3.html" aria-label="single-pages">
                  <span>Home 3</span>
                </a>
              </li>																
            </ul>																		
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="about-us-1.html" aria-label="nav-links">
              About																			   
            </a>						
          </li>	
          <li className="nav-item dropdown">
            <a className="nav-link" href="campaign-1.html" aria-label="nav-links">
              Events																			   
            </a>						
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link d-inline-flex gap-2 align-items-center" href="#" aria-label="nav-links" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="nav-title">
                Pages
              </span>
              <span className="dropdown-icon">											
                <svg width={12} height={8}><use xlinkHref="#chevron-down-icon" /></svg> 
              </span>										   
            </a>
            <div className="dropdown-menu dropdown-menu-lg shadow separator">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <a className="dropdown-item" href="history.html" aria-label="single-pages">
                      <span>History</span>												
                    </a>										
                    <a className="dropdown-item" href="about-us-2.html" aria-label="single-pages">
                      <span>About 2</span>												
                    </a>														
                    <a className="dropdown-item" href="gallery-1.html" aria-label="single-pages">
                      <span>Gallery 1</span>												
                    </a>
                    <a className="dropdown-item" href="gallery-2.html" aria-label="single-pages">
                      <span>Gallery 2</span>												
                    </a>		
                    <a className="dropdown-item" href="team.html" aria-label="single-pages">
                      <span>Team</span>												
                    </a>
                    <a className="dropdown-item" href="team-single.html" aria-label="single-pages">
                      <span>Team Single</span>												
                    </a>
                    <a className="dropdown-item" href="contact-2.html" aria-label="single-pages">
                      <span>Contact 2</span>												
                    </a>	
                    <a className="dropdown-item" href="product.html" aria-label="single-pages">
                      <span>Product</span>												
                    </a>
                    <a className="dropdown-item" href="product-single.html" aria-label="single-pages">
                      <span>Product Single</span>												
                    </a>																						
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <a className="dropdown-item" href="campaign-2.html" aria-label="single-pages">
                      <span>Campaign 2</span>												
                    </a>	
                    <a className="dropdown-item" href="campaign-single.html" aria-label="single-pages">
                      <span>Campaign Single</span>												
                    </a>
                    <a className="dropdown-item" href="donate-1.html" aria-label="single-pages">
                      <span>Donate 1</span>												
                    </a>	
                    <a className="dropdown-item" href="donate-2.html" aria-label="single-pages">
                      <span>Donate 2</span>												
                    </a>
                    <a className="dropdown-item" href="volunteer-1.html" aria-label="single-pages">
                      <span>Volunteer 1</span>												
                    </a>
                    <a className="dropdown-item" href="volunteer-2.html" aria-label="single-pages">
                      <span>Volunteer 2</span>												
                    </a>
                    <a className="dropdown-item" href="404.html" aria-label="single-pages">
                      <span>404 page</span>												
                    </a>
                    <a className="dropdown-item" href="404-2.html" aria-label="single-pages">
                      <span>404 page-2</span>												
                    </a>																									
                  </div>
                </div>
              </div>						
            </div>
            {/* dropdown-menu separator */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link d-inline-flex gap-2 align-items-center" href="#" aria-label="nav-links" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="nav-title">
                News
              </span>
              <span className="dropdown-icon">											
                <svg width={12} height={8}><use xlinkHref="#chevron-down-icon" /></svg> 
              </span>										   
            </a>	
            <ul className="dropdown-menu shadow">
              <li><a className="dropdown-item" href="news.html" aria-label="single-pages">
                  <span>News</span>												
                </a>
              </li>										
              <li><a className="dropdown-item" href="news-single.html" aria-label="single-pages">
                  <span>News Single</span>
                </a>
              </li>																
            </ul>								
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact-1.html">
              <span className="nav-title">
                Contact	
              </span>																			   
            </a>									
          </li>
          <li className="nav-item">
            <a className="btn btn-primary" href="donate-1.html">
              Contribute										   
            </a>									
          </li>							
        </ul>	
        <div className="top-bar pt-40 d-xl-none">												
          <div className="row g-20 align-items-center justify-content-between">
            <div className="col-lg-9">
              <ul className="top-bar-contact-lists contact-separator list-unstyled mb-0 d-flex flex-column gap-2 flex-lg-row gap-lg-20">
                <li className="d-flex gap-2 align-items-center">
                  <span className="mail-icon topbar-contact-icon icon-border">											
                    <svg width={12} height={12}><use xlinkHref="#mail-icon" /></svg> 
                  </span>											
                  <p className="mb-0 fw-medium"><a href="mailto:info@logistics.com" className="text-decoration-none link-hover-animation-1">info@logistics.com</a></p>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <span className="location-icon topbar-contact-icon icon-border">											
                    <svg width={14} height={14}><use xlinkHref="#location-icon" /></svg> 
                  </span>											
                  <p className="mb-0 fw-medium"><a href="#" className="text-decoration-none link-hover-animation-1">265 New Ave, Califonia, USA.</a></p>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <span className="phone-icon topbar-contact-icon icon-border">											
                    <svg width={12} height={12}><use xlinkHref="#phone-icon" /></svg> 
                  </span>
                  <p className="mb-0 fw-medium"><a href="tel:(+0123)234556789" className="text-decoration-none link-hover-animation-1">(+0123) 2345 56789</a></p>
                </li>											
              </ul>
              {/* top-bar-contact-lists */}
            </div>
            {/* col-6 */}
            <div className="col-lg-3">
              <div className="d-flex align-items-center justify-content-lg-end gap-10 social-icons text-secondary">
                <p className="mb-0 fw-medium">Follow Us:</p>
                <a href="#" className="text-decoration-none" aria-label="social-icon">
                  <span className="facebook-icon">											
                    <svg width={5} height={10}><use xlinkHref="#facebook-icon" /></svg> 
                  </span>
                </a>
                <a href="#" className="text-decoration-none" aria-label="social-icon">
                  <span className="twitter-icon">											
                    <svg width={11} height={9}><use xlinkHref="#twitter-icon" /></svg> 
                  </span>
                </a>									
                <a href="#" className="text-decoration-none" aria-label="social-icon">
                  <span className="linkedin-icon">											
                    <svg width={10} height={9}><use xlinkHref="#linkedin-icon" /></svg> 
                  </span>
                </a>																			
              </div>	
              {/* social-icons */}
            </div>
            {/* col-3 */}
          </div>
          {/* row */}	
        </div>
        {/* top-bar */}					  
      </div>
    </div>
  </nav>
  {/*Mobile-Header ======================*/}
</div>



    
    </>
  )
}

export default Navbar