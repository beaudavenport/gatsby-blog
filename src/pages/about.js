import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import pageStyles from './page.module.css';
import resume from '../data/files/Resume-2020.pdf';

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <p className={pageStyles.contentTitle}>About Me</p>
    <p>
      Hey there! My name is Beau, and I’m a software engineer in St. Louis, Missouri.
    </p>
    <p>
      I specialize in
      {' '}
      <strong>ReactJS</strong>
,
      {' '}
      <strong>React-Native</strong>
,
      {' '}
      <strong>SSG technologies </strong>
(like
      {' '}
      <strong>Gatsby</strong>
),
      {' '}
      <strong>NodeJS</strong>
,
      {' '}
      and
      {' '}
      <strong>Cloud Infrastructure</strong>
.
    </p>
    <p>
      <strong>Stay Connected: </strong>
    Follow me on
      {' '}
      <a href="https://twitter.com/beau_dav">twitter</a>
      , checkout my code on
      {' '}
      <a href="https://github.com/beaudavenport">github</a>
      , or download my
      {' '}
      <a href={resume}>resume</a>
.
    </p>
  </Layout>
);

export default AboutPage;
