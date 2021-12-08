import React, { useContext } from 'react'
import { aStarContext } from '../contexts/aStarContext';
import { pathfinderContext } from '../contexts/pathfinderContext';
export default function Header() {

  const [pathfinder, setPathfinder] = useContext(pathfinderContext);
  const [aStar, setAStar] = useContext(aStarContext);

  return (
    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
      <button onClick={() => setPathfinder(true)}>Start PathFinder</button>
      <button onClick={() => setAStar(true)}>Start A Star</button>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
};