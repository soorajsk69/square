import React from 'react';
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Company</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget">

                <ul className="list-unstyled footer-menu lh-35">
                <h5 className="text-capitalize mb-4">Quick Links</h5>

                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Subscribe Us</h4>
                <p>Subscribe to get the latest news article and resources </p>

              </div>
            </div>

            <div className="col-lg-3 ml-auto col-sm-6">
              <div className="widget">
                <div className="logo mb-4">
                  <h3>Mega<span>kit.</span></h3>
                </div>
                <h6><a href="tel:+23-345-67890">Support@megakit.com</a></h6>
                <a href="mailto:support@gmail.com"><span className="text-color h4">+91-9059178744</span></a>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="copyright">
                  &copy; Copyright Reserved to <span className="text-color">square</span> by <a href="" target="_blank" rel="noopener noreferrer">center</a>
                </div>
              </div>

           
        
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}