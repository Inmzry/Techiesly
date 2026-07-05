import React from 'react'
import Blue from "../assets/blue-bg-effect.avif";
import Orange from "../assets/orange-bg-effect.avif";
import Background from "../assets/cta-bg-2.avif";

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
              </div>
              <div className='cta-back-bg'>
                <img className='cta-back-bg-img-1' src={Orange} alt="background" />
                <img className='cta-back-bg-img-2' src={Blue} alt="background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer