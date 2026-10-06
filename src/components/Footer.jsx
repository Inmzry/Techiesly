import React from 'react'
import Blue from "../assets/blue-bg-effect.avif";
import Orange from "../assets/orange-bg-effect.avif";
import Background from "../assets/cta-bg-2.avif";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-cta-wr'>
          <div className='cta-wr'>
            <div className='cta-stroke'>
              <div className='cta-content'>
                <img className='cta-content-bg' src={Background} alt="background" />
                <h2>Tech that keeps up with you</h2>
                <p>Great gadgets, great prices — your next upgrade is waiting.
                  Shop Techiesly now.</p>
                <div className='button-glow'>
                  <HashLink smooth to="/#product-area" className="cta-btn button-glow-text-wr">
                    Shop Now
                  </HashLink>
                  <div className='gradient'></div>
                </div>
              </div>
              <div className='cta-back-bg'>
                <img className='cta-back-bg-img-1' src={Orange} alt="background" />
                <img className='cta-back-bg-img-2' src={Blue} alt="background" />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-content-wr'>
          <div className='footer-item-wr'>
            <div className='footer-item-title-wr'>
              <p>Techiesly</p>
            </div>
            <div className='footer-item-content'>
              <div className='footer-item-content-wr'>
                <div className='footer-links'>
                  <Link to="/" className="footer-link">
                    About Us
                  </Link>
                  <Link to="/" className="footer-link">
                    Contact
                  </Link>
                   <Link to="/" className="footer-link">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-item-wr'>
            <div className='footer-item-title-wr'>
              <p>Support</p>
            </div>
            <div className='footer-item-content'>
              <div className='footer-item-content-wr'>
                <div className='footer-links'>
                  <Link to="/" className="footer-link">
                    Shipping
                  </Link>
                  <Link to="/" className="footer-link">
                    Returns
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-item-wr'>
            <div className='footer-item-title-wr'>
              <p>Follow Us</p>
            </div>
            <div className='footer-item-content'>
              <div className='footer-item-content-wr'>
                <div className='footer-links'>
                  <Link to="/" className="footer-link">
                    Instagram
                  </Link>
                  <Link to="/" className="footer-link">
                    X
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer