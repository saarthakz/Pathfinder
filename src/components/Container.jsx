import React from 'react';
import Grid from './Grid';
import "./Container.css";
import Header from './Header';

export default function Container() {
  return (
    <div id="Container" className="Container">
      <Header />
      <Grid />
    </div>
  );
};
