/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import appartment from '../assets/images/apartment1.jpg';
import logo from '../assets/images/logo.svg';


const SinglePropertyPage = () => {
  let _carousel_index = 1;
  const carousel = (n) => {
    // reset index if n != _carousel_index
    if (n != _carousel_index) {
      _carousel_index = n;
    }
    // NodeList of img
    const img = document.querySelectorAll('.carousel-img');
    const thumbnails = document.querySelectorAll('.carousel-thumbnail-img');
    if (n > img.length) {
      _carousel_index = 1;
    }
    if (n <= 0) {
      _carousel_index = img.length;
    }
    // reset to zero already showed img
    img.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.display = 'none';
    });
    thumbnails.forEach((el) => {
      el.classList.remove('selected');
    });

    if (typeof img[_carousel_index - 1] !== 'undefined' && img[_carousel_index - 1].style.display != 'block') {
      img[_carousel_index - 1].style.display = 'block';
      if (typeof thumbnails[_carousel_index - 1] !== 'undefined') {
        thumbnails[_carousel_index - 1].classList.add('selected');
      }
    }
  };
  carousel(_carousel_index);
  const nextCarousel = () => carousel(++_carousel_index);
  const prevCarousel = () => carousel(--_carousel_index);
  return (
    <>
      <header className="header">
        <a href="/"><img src={logo} alt="property website logo" /></a>
        <nav className="nav">
          <a href="signIn.html">Login</a>
          <a href="signUp.html">Sign Up</a>
        </nav>
      </header>
      <main className="detail-main">
        <div className="single-property">
          <div className="detail-header">
            <h1>House For Buy In Kimironko</h1>
          </div>
          <div className="featured">
            <img src={appartment} className="carousel-img is-rounded" onClick="nextCarousel()" alt="appartment" />
            <img src={appartment} className="carousel-img is-rounded" onClick="nextCarousel()" alt="appartment" />
            <img src={appartment} className="carousel-img is-rounded" onClick="nextCarousel()" alt="appartment" />
            <img src={appartment} className="carousel-img is-rounded" onClick="nextCarousel()" alt="appartment" />
            <img src={appartment} className="carousel-img is-rounded" onClick="nextCarousel()" alt="appartment" />
          </div>
          <div className="detail-details">
            <section className="prices">
              <span className="price">
                <span>2,000,000</span>
                <span>RWF</span>
              </span>
              <div className="price-details" role="details">
                <div className="detail-item">
                  <label>Status</label>
                  <span>Available</span>
                </div>
                <div className="detail-item">
                  <label>Type</label>
                  <span>Single Family Home</span>
                </div>
                <div className="detail-item">
                  <label>State</label>
                  <span>Rwanda</span>
                </div>
                <div className="detail-item">
                  <label>City</label>
                  <span>Kigali</span>
                </div>
                <div className="detail-item">
                  <label>Address</label>
                  <span>KN 1 Ave</span>
                </div>
              </div>
            </section>
            <section className="actions">
              <button type="button" className="btn-action" htmlFor="contact-seller">
                Contact seller
                <i className="fas fa-phone" />
              </button>
              <button type="button" className="btn-action" htmlFor="report-fraudulent">
                Report as fraudulent
                <i className="fas fa-ban" />
              </button>
            </section>
            <section className="gmap">
              <div id="map" />
            </section>
          </div>
          <div className="detail-carousel" role="thumbnails">
            <i className="material-icons white" onClick="prevCarousel()">chevron_left</i>
            <img src={appartment} className="carousel-thumbnail-img" onClick="carousel(1)" alt="carsoul 1" />
            <img src={appartment} className="carousel-thumbnail-img" onClick="carousel(2)" alt="carousel" />
            <img src={appartment} className="carousel-thumbnail-img" onClick="carousel(2)" alt="carousel" />
            <img src={appartment} className="carousel-thumbnail-img" onClick="carousel(2)" alt="carousel" />
            <img src={appartment} className="carousel-thumbnail-img" onClick="carousel(2)" alt="carousel" />
            <i className="material-icons white" onClick="nextCarousel()">chevron_right</i>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2019 All Right Reserved to PropertyPro-Lite</p>
      </footer>
    </>
  );
};

export default SinglePropertyPage;
