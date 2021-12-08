import React from 'react';
import Container from './components/Container';
import { TriggerProvider } from './triggerContext';

export default function App() {
  return (<>
    <TriggerProvider>
      <Container />
    </TriggerProvider>
  </>);
};

