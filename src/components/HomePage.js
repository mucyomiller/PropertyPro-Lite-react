/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import apartment1 from '../assets/images/apartment1.jpg';

const HomePage = () => {
  const dup = (arr, n) => Array(n).fill([...arr]).reduce((a, b) => a.concat(b));
  const data = [{
    id: 1,
    owner: 1,
    status: 'available',
    price: '2,000,000',
    beds: 2,
    baths: 2,
    state: 'Rwanda',
    city: 'Kigali',
    address: 'KN 1 ave',
    type: 'Single Family Home',
    created_on: '2019-06-19T17:29:03+02:00',
    image_url: 'apartment1.jpg',
    other_images: [
      'apartment1.jpg',
      'apartment2.jpg',
      'apartment5.jpeg',
      'apartment6.jpeg',
    ],
  },
  {
    id: 2,
    owner: 1,
    status: 'available',
    price: '2,000,000',
    beds: 2,
    baths: 2,
    state: 'Rwanda',
    city: 'Kigali',
    address: 'KN 1 ave',
    type: 'Multi Family Home',
    created_on: '2019-06-19T17:29:03+02:00',
    image_url: 'apartment2.jpg',
    other_images: [
      'apartment1.jpg',
      'apartment2.jpg',
      'apartment5.jpeg',
      'apartment6.jpeg',
    ],
  },
  {
    id: 3,
    owner: 1,
    status: 'available',
    price: '10,000,000',
    beds: 15,
    baths: 5,
    state: 'Rwanda',
    city: 'Kigali',
    address: 'KN 1 ave',
    type: 'Villa',
    created_on: '2019-06-19T17:29:03+02:00',
    image_url: 'apartment5.jpeg',
    other_images: [
      'apartment1.jpg',
      'apartment2.jpg',
      'apartment5.jpeg',
      'apartment6.jpeg',
    ],
  },
  ];
  const datas = dup(data, 3);
  const renderProperties = (properties) => properties.map((property, index) => (
    <div className="card" key={index}>
      <div className="featured">
        <img src={apartment1} alt="apartment" />
      </div>
      <div className="card-content">
        <div className="card-item">
          <label htmlFor="Title">
            Title: House for Sell In
          </label>
          {property.city}
        </div>
        <div className="card-item">
          <label>
            Address:$
          </label>
          {property.address}
        </div>
        <div className="card-item">
          <label>Price: $</label>
          {property.price}
          RWF
        </div>
      </div>
      <div className="card-action">
        <Link to="/property/1">View More</Link>
      </div>
    </div>
  ));

  return (
    <div className="homepage">
      <header className="header">
        <a href="index.html"><img src={logo} alt="property website logo" /></a>
        <nav className="nav">
          <Link to="/signin">Login</Link>
          <Link to="/signip">Sign Up</Link>
        </nav>
      </header>
      <aside className="aside">
        <section>
          <h2>Filters </h2>
          <div>
            <p>
              <label htmlFor="prop_types">
                Per Types of Property:
                <select name="prop_types" id="prop_types">
                  <option value="multi_family_home">Multi Family Home</option>
                  <option value="single_family_home">Single Family Home</option>
                  <option value="loft">Loft</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="town_house">Townhouse</option>
                  <option value="lot">Lot</option>
                  <option value="farm">Farm</option>
                  <option value="villa">Villa</option>
                </select>
              </label>
            </p>
            <p>
              <label htmlFor="num_of_beds">
                Per Number of Bedrooms:
                <select name="num_of_beds" id="num_of_beds">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </label>
            </p>

            <p>
              <label htmlFor="location">
                Per City:
                <select name="location" id="location">
                  <option value="kicukiro">Kicukiro</option>
                  <option value="nyarugenge">Nyarugenge</option>
                  <option value="gasabo">Gasabo</option>
                </select>
              </label>
            </p>
          </div>
        </section>
      </aside>
      <main className="homepage-main">
        {renderProperties(datas)}
      </main>
      <footer className="footer">
        <p> &copy; 2019 All Right Reserved to PropertyPro-Lite </p>
      </footer>
    </div>
  );
};

export default HomePage;
