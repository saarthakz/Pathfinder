import React from 'react';
import Container from './components/Container';
import { AStarProvider } from './contexts/aStarContext';
import { PathfinderProvider } from './contexts/pathfinderContext';

export default function App() {
  return (<>
    <PathfinderProvider><AStarProvider>
      <Container />
    </AStarProvider></PathfinderProvider>
  </>);
};

