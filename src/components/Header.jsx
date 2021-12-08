import React, { useContext } from 'react'
import { triggerContext } from '../triggerContext'

export default function Header() {

  const [trigger, setTrigger] = useContext(triggerContext);

  return (
    <div>
      <button onClick={() => setTrigger(true)}>Start PathFinder</button>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
};