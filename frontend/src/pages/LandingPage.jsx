import React, { useEffect } from 'react';
import '../styles/LandingPage.css';

function LandingPage() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="landing-page">
      <section className="section section1">
        <div className="content">
          <h1>CyberX</h1>
          <p>Welcome, to the future of the forensic.</p>
        </div>
        <div className="spline-model">
          {/* Replace with your Spline model */}
          <iframe src="https://my.spline.design/robotindatacentercopy-c14015ebe6a7e7b8e1858df5db464562/"  width="100%" height="100%"></iframe>
        </div>
      </section>
      <section className="section section2">
        <div className="spline-model">
          {/* Replace with your Spline model */}
          <iframe src="https://my.spline.design/rocket-75400d0e046a4bffcac350836d6ff22c/"  width="100%" height="100%"></iframe>
        </div>
        <div className="content">
          <button className='landing-button' onClick={() => window.location.href = '/home'}>Explore</button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;