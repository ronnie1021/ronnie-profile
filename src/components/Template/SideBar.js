import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yuxuan Wan</h2>
        <p><a href="mailto:ronie1021@hotmail.com">ronie1021@hotmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yuxuan(Ronnie). A Data Scientist / Machine Learning Engineer with 5+ 
        years’ experience in NLP, Deep Learning, Machine Learning.
        I am a <a href="https://www.cmu.edu/">CMU</a> graduate, MISM Alumni. Currently,
        Data Scientist II of <a href="https://www.didiglobal.com/">DiDi Labs</a>. Before DiDi, I worked
        at <a href="https://www.midea.com">Midea Group's US Emerging Technology Center </a> as Data Scientist,
        Before Midea, I worked as Data Scientist for <a href="https://www.hilti.com/">Hilti</a>, which is a high-end
        construction tools manufacturer in Europe.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">Home</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yuxuan Wan.</p>
    </section>
  </section>
);

export default SideBar;
