// Form.js

import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cta-item bg-white p-5 rounded">
              <h2 className="mb-4">Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="john@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <p className="mt-3">Or contact us directly at:</p>
              <h3><i className="ti-mobile mr-3 text-color"></i>+23 876 65 455</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
