'use client';
import React from 'react';
import Navigation from './Navigation';

const Bottombar = () => {
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        <Navigation linkClass="bottombar_link" textClass="text-subtle-medium" />
      </div>
    </section>
  );
};

export default Bottombar;
