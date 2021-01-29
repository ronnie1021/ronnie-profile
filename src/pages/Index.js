import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import FunFact from '../components/Home/FunFacts';
import facts from '../data/home/facts';

const Index = () => (
  <Main
    description={"Welcome to Yuxuan Wan's personal website. Data Scientist at DiDi labs in Bay Area, "
    + 'CMU Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Thanks to <a href="https://github.com/mldangelo/personal-site">MICHAEL D&apos;ANGELO</a> for Contributing such a great react application
            template written with modern Javascript.
          </p>
        </div>
      </header>
      <div>
        <FunFact data={facts} />
      </div>
    </article>
  </Main>
);

export default Index;
