import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <Link to='nested-route'>Nested</Link>

      <Outlet />
    </section>
  );
};
export default About;
